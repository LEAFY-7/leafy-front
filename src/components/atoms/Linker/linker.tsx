import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

interface IProps {
    href: string;
    children?: ReactElement | ReactElement[] | string | string[] | number | number[];
}

const Linker = (props: IProps) => {
    const { href, children } = props;

    return <Link to={href}>{children}</Link>;
};

export default Linker;
