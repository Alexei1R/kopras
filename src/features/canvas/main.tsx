import { useState } from 'react';
import { ReactFlow, Background, Panel, BackgroundVariant } from '@xyflow/react';

import '@xyflow/react/dist/style.css';


const Main = () => (
    <div className="flex items-center justify-center h-full w-full">
        <ReactFlow >
            <Background color="skyblue" variant={BackgroundVariant.Dots} />
            <Panel>
                {/* <div>variant:</div> */}
                {/* <button onClick={() => setVariant('dots')}>dots</button> */}
                {/* <button onClick={() => setVariant('lines')}>lines</button> */}
                {/* <button onClick={() => setVariant('cross')}>cross</button> */}
            </Panel>
        </ReactFlow>
    </div>
);

export default Main;
