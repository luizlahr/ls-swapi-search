import type { PropsWithChildren, ReactElement } from 'react';

interface MainProps extends PropsWithChildren {
}

export const Main = ({ children }: MainProps): ReactElement => {
  return (
    <main className="flex flex-col max-w-5xl mx-auto gap-6 p-4 md:p-6 lg:p-8">
      {children}
    </main>
  );
};