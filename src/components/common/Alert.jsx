import React, {useEffect} from 'react';
import { message } from 'antd';
const Alert = (props) => {
  const [messageApi, contextHolder] = message.useMessage();
  useEffect(()=>{
    messageApi.open({
      type: props?.type,
      content: props?.message,
    });
  })
    
  return (
    <>
      {contextHolder}
    </>
  );
};
export default Alert;