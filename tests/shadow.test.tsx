import { act } from '@testing-library/react';
import { Modal } from 'antd';
import { version } from 'react';
import '../src';

describe('Trigger.Shadow', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should work', async () => {
    Modal.info({
      title: 'Info',
      content: 'This is a message',
    });

    act(() => {
      jest.runAllTimers();
    });

    expect(version.startsWith('19')).toBeTruthy();
    expect(document.querySelector('.ant-modal-root')).toBeTruthy();
  });
});
