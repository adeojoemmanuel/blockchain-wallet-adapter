import { render } from '@testing-library/react';

import TaskPill from './task-pill';

describe('TaskPill', () => {
  it('should render successfully', () => {
    const TaskPillProps = {
      completed: false,
      points: 500,
      onClick: () => null,
    };
    const { baseElement } = render(<TaskPill {...TaskPillProps} />);
    expect(baseElement).toBeTruthy();
  });
});
