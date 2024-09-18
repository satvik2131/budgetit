import { Suspense, lazy } from 'react';
import {LoadingScreen} from './loadingScreen';

export const Loadable = (Component: any) => (props: JSX.IntrinsicAttributes) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );