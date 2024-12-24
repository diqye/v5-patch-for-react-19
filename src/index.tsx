import { unstableSetRender } from 'antd';
import { createRoot } from 'react-dom/client';

unstableSetRender((node, container) => {
  (container as any)._reactRoot ||= createRoot(container);
  const root: ReturnType<typeof createRoot> = (container as any)._reactRoot;
  root.render(node);
  return async () => {
    // Wait for timeout to avoid React render race.
    await new Promise((resolve) => setTimeout(resolve, 0));
    root.unmount();
  };
});
