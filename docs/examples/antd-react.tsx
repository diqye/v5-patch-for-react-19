/* eslint no-console:0 */

import '@ant-design/v5-patch-for-react-19';
import { Button, Flex, Modal, version } from 'antd';
import * as React from 'react';

const App = () => {
  const onBtnClick = () => {
    Modal.info({
      title: 'Info',
      content: 'This is a message',
    });
  };

  return (
    <Flex vertical gap="middle" align="flex-start">
      <Button type="primary" onClick={onBtnClick}>
        Click Me
      </Button>
      <div>{`antd: ${version}`}</div>
      <div>{`react: ${React.version}`}</div>
    </Flex>
  );
};

export default App;
