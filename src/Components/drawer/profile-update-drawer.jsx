import { Drawer } from 'antd';
import React from 'react'

const ProfileUpdateDrawer = ({ drawerOpen, setDrawerOpen }) => {
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
    >
      <h1 style={{ color: "#fff" }}>...</h1>
    </Drawer>
  )
}

export default ProfileUpdateDrawer