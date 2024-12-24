import { unstableSetRender } from 'antd';
import { createRoot } from 'react-dom/client';

type RenderType = Parameters<typeof unstableSetRender>[0];
type ContainerType = Parameters<RenderType>[1] & {
  _reactRoot?: ReturnType<typeof createRoot>;
};

unstableSetRender((node, container: ContainerType) => {
  container._reactRoot ||= createRoot(container);
  const root: ReturnType<typeof createRoot> = container._reactRoot;
  root.render(node);
  return async () => {
    // Wait for timeout to avoid React render race.
    await new Promise((resolve) => setTimeout(resolve, 0));
    root.unmount();
  };
});
