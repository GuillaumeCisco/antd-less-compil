import React from 'react';
import {Row, Col, Button} from 'antd';

const App = props =>
    <Row>
        <Col span={12}><h1 className="main">title</h1></Col>
        <Col span={12}>
            <Button
                type="primary"
                size="large"
                className="custom-primary"
            >
                button
            </Button>
        </Col>
    </Row>;


export default App;
