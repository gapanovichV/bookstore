import React from 'react'
import cn from "classnames";
import {Button, SizeButton, VariantButton} from "shared/Button";
import './styles/index.scss';

function App() {
  return (
    <div className={cn('app')}>
      <Button variantBtn={VariantButton.FILL} sizeBtn={SizeButton.ICON}>Test</Button>
    </div>
  );
}

export default App;
