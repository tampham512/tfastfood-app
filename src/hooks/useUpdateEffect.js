import {DependencyList, EffectCallback, useEffect} from 'react';

import useIsFirstRender from './useIsFirstRender';

function useUpdateEffect(effect, deps) {
  const isFirst = useIsFirstRender();

  useEffect(() => {
    if (!isFirst) {
      return effect();
    }
  }, deps);
}

export default useUpdateEffect;
