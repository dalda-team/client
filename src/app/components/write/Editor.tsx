import { css } from '@emotion/react';
import styled from '@emotion/styled';
import {
  $convertFromMarkdownString,
  $convertToMarkdownString,
  TRANSFORMERS,
} from '@lexical/markdown';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { EditorState } from 'lexical';
import { rem } from 'polished';
import { colors } from '~/libs/colors';
import { editorStyles, initialConfig } from '~/libs/editor';
import EditorPlaceholder from './EditorPlaceholder';
import CustomAutoLinkPlugin from './plugins/CustomAutoLinkPlugin';
import CustomCodeHighlightPlugin from './plugins/CustomCodeHighlightPlugin';

interface Props {
  isEmpty: boolean;
  defaultValue?: string;
  onChange: (value: string) => void;
}

function Editor({ isEmpty, defaultValue = '', onChange }: Props) {
  const [HEADING, ...REST_TRANSFORMERS] = TRANSFORMERS;

  const onChangeListener = (editorState: EditorState) => {
    editorState.read(() => {
      const markdown = $convertToMarkdownString(REST_TRANSFORMERS);
      onChange(markdown);
    });
  };

  return (
    <LexicalComposer
      initialConfig={{
        ...initialConfig,
        editorState: () => $convertFromMarkdownString(defaultValue, REST_TRANSFORMERS),
      }}
    >
      <Container>
        <ContainerInner isEmpty={isEmpty}>
          <RichTextPlugin
            contentEditable={<ContentEditable className="editor-input" />}
            placeholder={<EditorPlaceholder />}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <HistoryPlugin />
          <AutoFocusPlugin />
          <ListPlugin />
          <CustomAutoLinkPlugin />
          <CustomCodeHighlightPlugin />
          <OnChangePlugin onChange={onChangeListener} />
          <MarkdownShortcutPlugin transformers={REST_TRANSFORMERS} />
        </ContainerInner>
      </Container>
    </LexicalComposer>
  );
}

const Container = styled.div`
  flex: 1;
  position: relative;
`;

const ContainerInner = styled.div<{ isEmpty: boolean }>`
  height: 100%;
  position: relative;
  border-radius: ${rem(5)};
  border: ${rem(1)} solid ${colors.gray1};
  font-size: ${rem(14)};

  .editor-input {
    ${editorStyles};
    height: 100%;
    padding: ${rem(16)};
    outline: none;
  }

  ${(props) =>
    props.isEmpty &&
    css`
      border-color: red;
    `}
`;

export default Editor;
