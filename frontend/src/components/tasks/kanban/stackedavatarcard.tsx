import { AntDesignOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Tooltip } from 'antd'
import React from 'react'

const StackedCardOnCard = () => {
  return (
    <Avatar.Group
      size="default"
        maxCount={2}
        maxStyle={{ color: 'white', backgroundColor: '#1677ff', cursor: 'pointer' }}
    >
      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
      <Tooltip title="Ant User" placement="top">
        <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
      </Tooltip>
      <Avatar style={{ backgroundColor: '#1677ff' }} icon={<AntDesignOutlined />} />
    </Avatar.Group>
  )
}

export default StackedCardOnCard