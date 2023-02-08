import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';
import styled, { CSSProperties } from 'styled-components';

interface TextViewerProps {
  style?: CSSProperties;
  data?: string;
}

export default function TextViewer({ style, data }: TextViewerProps) {
  return (
    <Wrapper style={style}>
      <Viewer initialValue={data} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  & .toastui-editor-contents {
    color: white;
    font-size: 18px;
  }
`;
