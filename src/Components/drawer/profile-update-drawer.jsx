import { Button, Drawer, Form, Space } from 'antd';
import React from 'react'
import UpdateProfileForm from '../forms/update-profile-form';
import dayjs from "dayjs";
import { useMutation } from '@tanstack/react-query';
import { updateProfileEnd } from '../../http/api';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { setAuth } from '../../store/slice/auth-slice';


const updateProfile = async (credentials) => {
  const { data } = await updateProfileEnd(credentials);
  return data;
};
const ProfileUpdateDrawer = ({ drawerOpen, setDrawerOpen }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const { mutate, isPending } = useMutation({
    mutationKey: ["update-profile"],
    mutationFn: updateProfile,
    onSuccess: async (data) => {
      console.log(data);
      dispatch(
        setAuth({
          user: data.message.user,
        })
      );
      toast.success("Profile updated successfully");
    },
    onError: (error) => {
      toast.error("Login Failed: " + (error?.message || "Something went wrong"));
    },
  })

  const handleSubmit = () => {
    const values = form.getFieldsValue();

    const formattedValues = {
      ...values,
      dateOfBirth: values.dateOfBirth ? dayjs(values.dateOfBirth).format("YYYY-MM-DD") : null,
      socialMedia: {
        instagram: values.instagram || "",
        twitter: values.twitter || "",
        snapchat: values.snapchat || "",
      },
    };

    mutate(formattedValues);
  };

  return (
    <Drawer
      title="Update Profile"
      open={drawerOpen}
      styles={{
        body: { background: "#000" },
        header: { background: "#00", color: "#fff" },
        content: { background: "#000" }
      }}
      onClose={() => setDrawerOpen(false)}
      width={450}
      destroyOnClose={true}
      extra={
        <Space>
          <Button onClick={() => setDrawerOpen(false)}>Cancel</Button>
          <Button onClick={handleSubmit} className='font-bold' style={{ background: "#FFD700", color: "#000" }}>
            Submit
          </Button>
        </Space>
      }
    >
      <Form layout="vertical" form={form} initialValues={{ gender: "male" }}>
        <UpdateProfileForm form={form} />
      </Form>
    </Drawer>
  )
}

export default ProfileUpdateDrawer