import React from 'react';
import {Button, Icon, Upload} from "antd";

class DataUpload extends React.Component {
    constructor() {
        super();
        this.state = {
            fileList: [],
            uploading: false,
        };
    }
    handleUpload = () => {
        const { fileList } = this.state;
        const formData = new FormData();
        fileList.forEach((file) => {
            formData.append('files[]', file);
        });

        this.setState({
            uploading: true,
        });
    };

    componentDidMount() {

    }

    render() {

        const { uploading } = this.state;
        const props = {
            action: '//jsonplaceholder.typicode.com/posts/',
            onRemove: (file) => {
                this.setState(({ fileList }) => {
                    const index = fileList.indexOf(file);
                    const newFileList = fileList.slice();
                    newFileList.splice(index, 1);
                    return {
                        fileList: newFileList,
                    };
                });
            },
            beforeUpload: (file) => {
                this.setState(({ fileList }) => ({
                    fileList: [...fileList, file],
                }));
                return false;
            },
            fileList: this.state.fileList,
        };

        return (
            <div style={{background:'#fff',height:'42rem'}}>
                <Upload {...props}>
                    <Button>
                        <Icon type="upload" /> Select File
                    </Button>
                </Upload>
                <Button
                    className="upload-demo-start"
                    type="primary"
                    onClick={this.handleUpload}
                    disabled={this.state.fileList.length === 0}
                    loading={uploading}
                >
                    {uploading ? 'Uploading' : 'Start Upload' }
                </Button>
            </div>

        )
    }
}

export default DataUpload;