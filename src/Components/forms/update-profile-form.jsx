import { DatePicker, Form, Input, Radio, Select } from "antd";
import React, { useEffect } from "react";
import { InterestOptions, GenderOptions } from "../../constants/data";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

const UpdateProfileForm = ({ form }) => {

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      form.setFieldsValue({
        fullName: user.fullName,
        bio: user.bio,
        gender: user.gender || "male",
        dateOfBirth: user.dateOfBirth ? dayjs(user.dateOfBirth) : null,
        interest: user.interest || [],
        instagram: user.socialMedia?.instagram || "",
        twitter: user.socialMedia?.twitter || "",
        snapchat: user.socialMedia?.snapchat || "",
        about: user.about || "",
        lookingFor: user.lookingFor || "",
      });
    }
  }, [user, form]);

  return (
    <>
      <Form.Item
        label="Full Name"
        name="fullName"
        rules={[{ required: true, message: "Full Name is required" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Bio"
        name="bio"
        rules={[{ required: true, message: "Bio is required" }]}
      >
        <Input.TextArea />
      </Form.Item>

      <div className="flex items-center justify-between">
        <Form.Item
          label="Gender"
          name="gender"
          rules={[{ required: true, message: "Gender is required" }]}
        >
          <Radio.Group block options={GenderOptions} optionType="button" />
        </Form.Item>

        <Form.Item
          label="Date of Birth"
          name="dateOfBirth"
          rules={[{ required: true, message: "Date of Birth is required" }]}
        >
          <DatePicker />
        </Form.Item>
      </div>

      <Form.Item
        label="Interest"
        name="interest"
        rules={[{ required: true, message: "Interest is required" }]}
      >
        <Select
          placeholder="Enter Tags"
          mode="tags"
          options={InterestOptions}
          allowClear
        />
      </Form.Item>

      <Form.Item label="Instagram" name="instagram">
        <Input placeholder="Enter Instagram URL" />
      </Form.Item>

      <Form.Item label="Twitter" name="twitter">
        <Input placeholder="Enter Twitter URL" />
      </Form.Item>

      <Form.Item label="Snapchat" name="snapchat">
        <Input placeholder="Enter Snapchat URL" />
      </Form.Item>

      <Form.Item label="About" name="about">
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        label="Looking For"
        name="lookingFor"
        rules={[{ required: true, message: "Looking For is required" }]}
      >
        <Input.TextArea />
      </Form.Item>
    </>
  );
};

export default UpdateProfileForm;
