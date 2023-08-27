import type { HTMLAttributes } from 'react';

interface YoutubeProps {
    src: string;
    title: string;
}

type Props = React.PropsWithChildren<YoutubeProps> & HTMLAttributes<HTMLIFrameElement>;

const Youtube = ({ src = '', title = '', ...rest }: Props) => {
    return (
        <>
            <iframe
                width="100%"
                height="100%"
                src={src}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                {...rest}
            ></iframe>
        </>
    );
};
export default Youtube;
