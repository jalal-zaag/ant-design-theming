import React, {useState} from 'react';
import {Button, ConfigProvider, Radio} from "antd";
import {greenToken, orangeToken, redToken} from "../theme/token";

const DefaultLayout = () => {

    const [value, setValue] = useState('red');

    const _token = {
        "red": redToken,
        "orange": orangeToken,
        "light": greenToken
    }

    const onChange = (e) => {
        setValue(e.target.value);
    };

    const themeConfig = {
        token: _token[value]
    }

    return (
        <ConfigProvider
            theme={themeConfig}
        >

            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: "100px",
                gap: "20px"
            }}>

                <div>
                    <Radio.Group onChange={onChange} value={value}>
                        <Radio value="red">red</Radio>
                        <Radio value="green">green</Radio>
                        <Radio value="orange">orange</Radio>
                    </Radio.Group>
                </div>

                <div>
                    <Button type="primary">
                        Ant Theming
                    </Button>
                </div>
            </div>

        </ConfigProvider>
    );
};

export default DefaultLayout;