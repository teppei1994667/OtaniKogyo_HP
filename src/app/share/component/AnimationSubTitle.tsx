import { Title } from "./Title";

type animationSubTitleProps = {
  subTitle: string;
  parentClassName?: string;
  childClassName?: string;
};

export const AnimationSubTitle = (props: animationSubTitleProps) => {
  const { subTitle, parentClassName } = props;

  return (
    <Title
      title={subTitle}
      parentClassName={parentClassName ? parentClassName : ""}
      childClassName={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold primary-color whitespace-pre-line ${
        props.childClassName ? props.childClassName : ""
      }`}
    />
  );
};
