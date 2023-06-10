import React, { ChangeEvent } from "react";
import Button from "@components/ui/Button";
import Flex from "@components/ui/Flex";
import TextFiled from "@components/ui/TextField";
import { HiOutlineCheckCircle } from "react-icons/hi";
import { AiOutlineExclamationCircle, AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import Typography from "@components/ui/Typograph";
import Toggle from "@components/ui/Toggle";
import Textarea from "@components/ui/Textarea";
import useAutoResizeTextarea from "@hooks/useAutoResizeTextarea";
import Box from "@components/ui/Box";

/**
 * Page의 관심사 분리 예시 입니다.
 *
 * 최상위 루트로 폴더를 잡고 페이지가 되는 컴포넌트는 Page로 명명하고
 * 같은 관심사의 컴포넌트는 해당 위치로 경로를 잡아주세요.
 *
 */

const Home = () => {
  const [state, setState] = React.useState("");
  const [error, setError] = React.useState(false);
  const [text, setText] = React.useState("");

  const { value, textareaRef, handleChange } = useAutoResizeTextarea();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (state === "통과") {
      setError(false);
      setText("통과입니다.");
    } else {
      setError(true);
      setText("에러입니다.");
    }
  };
  return (
    <Box direction="column">
      <Flex direction="column">
        {/* 버튼 사용 예시 */}
        <Button variant="default">기본</Button>
        <Button variant="blue">button</Button>
        <Button variant="blue" disabled={true}>
          disabled
        </Button>
        <Button variant="blue_border">button-border</Button>
        <Button variant="green">green</Button>
        <Button variant="green_border">green-border</Button>
        <Button variant="green_border" disabled={true}>
          green-border
        </Button>
        <Button variant="red">red</Button>
      </Flex>
      <Flex>
        {/* Text Field 사용 예시 */}

        <form onSubmit={handleSubmit}>
          <TextFiled
            type="text"
            value={state}
            placeholder={"이메일을 입력해주세요"}
            labelTitle="비활성"
            onChange={onChange}
            error={error}
            helperText={text}
            leftIcon={<AiOutlineMail />}
            helperIcon={
              error ? <AiOutlineExclamationCircle /> : <HiOutlineCheckCircle />
            }
            disabled={true}
          />
          <TextFiled
            type="text"
            value={state}
            placeholder={"이메일을 입력해주세요"}
            labelTitle="이메일"
            onChange={onChange}
            error={error}
            helperText={text}
            leftIcon={<AiOutlineMail />}
            helperIcon={
              error ? <AiOutlineExclamationCircle /> : <HiOutlineCheckCircle />
            }
          />
          <TextFiled
            type="password"
            value={state}
            placeholder={"비밀번호를 입력해주세요"}
            labelTitle="비밀번호"
            onChange={onChange}
            error={error}
            helperText={text}
            leftIcon={<RiLockPasswordLine />}
            helperIcon={
              error ? <AiOutlineExclamationCircle /> : <HiOutlineCheckCircle />
            }
          />
          <TextFiled
            type="text"
            value={state}
            placeholder={"이메일을 입력해주세요"}
            onChange={onChange}
            error={error}
            helperText={text}
            leftIcon={<AiOutlineMail />}
            helperIcon={
              error ? <AiOutlineExclamationCircle /> : <HiOutlineCheckCircle />
            }
          />
          <TextFiled
            type="password"
            value={state}
            placeholder={"비밀번호를 입력해주세요"}
            onChange={onChange}
            error={error}
            helperText={text}
            leftIcon={<RiLockPasswordLine />}
            helperIcon={
              error ? <AiOutlineExclamationCircle /> : <HiOutlineCheckCircle />
            }
            hookForm={false}
          />

          <Button variant="blue_border" type="submit">
            확인
          </Button>
        </form>
      </Flex>
      <Flex direction="column">
        {/* Typography 사용 예시 */}

        <Typography variant="H1">타이포그래프</Typography>
        <Typography variant="H2">타이포그래프</Typography>
        <Typography variant="H3">타이포그래프</Typography>
        <Typography variant="BODY1">타이포그래프</Typography>
        <Typography variant="BODY2">타이포그래프</Typography>
        <Typography variant="BODY3">타이포그래프</Typography>
      </Flex>
      <Flex direction="column">
        {/* Toggle 사용 예시 */}
        <Toggle on="ON" off="OFF" />
      </Flex>
      <Flex>
        {/* Textarea 사용 예시 */}

        <Textarea value={value} ref={textareaRef} onChange={handleChange} />
      </Flex>
    </Box>
  );
};

export default Home;
