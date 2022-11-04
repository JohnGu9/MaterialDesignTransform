import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { ContainerTransform, ContainerTransformLayout } from '../lib/container-transform';
import "./ContainerTransform.css";

export default {
  component: ContainerTransform,
} as ComponentMeta<typeof ContainerTransform>;

const Template: ComponentStory<typeof ContainerTransform> = (args) => {
  const [id, setId] = useState(1 as number | undefined);
  return (
    <div className="main">
      <div className="buttons-bar">
        <button onClick={() => setId(undefined)}>close</button>
        <button onClick={() => setId(0)}>open-0</button>
        <button onClick={() => setId(1)}>open-1</button>
        <button onClick={() => setId(2)}>open-2</button>
      </div>
      <ContainerTransformLayout
        keyId={id}
        style={containerTransformLayoutStyle}
        onScrimClick={action('onScrimClick')}>
        <ContainerTransform
          container={<div style={fullSizeCenter}>Container0</div>}
          style={{ backgroundColor: 'white', outline: '1px solid black', }}
          {...args}
          keyId={0}>
          <div className="container">
            ContainerTransform0
          </div>
        </ContainerTransform>
        <div style={{ height: 32 }} />
        <ContainerTransform
          container={<div style={fullSizeCenter}>Container1</div>}
          style={{ backgroundColor: 'white', outline: 'dotted', }}
          {...args}
          keyId={1}>
          <div className="container">
            ContainerTransform1
          </div>
        </ContainerTransform>
        <div style={{ height: 32 }} />
        <ContainerTransform
          container={<div style={fullSizeCenter}>Container2</div>}
          style={{
            backgroundColor: 'rgba(186, 186, 186, 1)',
            borderRadius: '10px',
            boxShadow: '0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12)'
          }}
          {...args}
          keyId={2}>
          <div className="container">
            ContainerTransform2
          </div>
        </ContainerTransform>
      </ContainerTransformLayout>
    </div>
  );
}

export const Primary = Template.bind({});

const Template0: ComponentStory<typeof ContainerTransform> = (args) => {
  const [id, setId] = useState(0 as number | undefined);
  return (
    <div className="main">
      <div className="buttons-bar">
        <button onClick={() => setId(id === undefined ? 0 : undefined)}>{id === undefined ? 'open' : 'close'}</button>
      </div>
      <ContainerTransformLayout
        keyId={id}
        style={containerTransformLayoutStyle}
        onScrimClick={action('onScrimClick')}
        overlayStyle={{
          bottom: 10,
          right: 10,
          width: 100,
          height: 100,
          borderRadius: 20,
        }}>
        <ContainerTransform
          container={<div style={fullSizeCenter}>Container</div>}
          style={{
            backgroundColor: 'rgba(186, 186, 186, 1)',
            borderRadius: '10px',
            boxShadow: '0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12)'
          }}
          {...args}
          keyId={0}>
          <div className="container">
            ContainerTransform
          </div>
        </ContainerTransform>
      </ContainerTransformLayout>
    </div>
  );
}

export const OverlayStyle = Template0.bind({});

const containerTransformLayoutStyle = {
  outline: 'dotted', padding: 32, margin: 16
};

const fullSizeCenter = {
  display: 'flex', justifyContent: 'center', alignItems: 'center',
  height: '100%', width: '100%',
}
