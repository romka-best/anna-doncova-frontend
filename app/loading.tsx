import { HashLoader } from 'react-spinners';
import cn from 'classnames';

interface LoadingProps {
    className?: string;
    isFullScreen?: boolean;
}

export default function Loading({ className, isFullScreen = true }: LoadingProps) {
    return (
        <div className={cn('flex items-center justify-center', isFullScreen && 'min-h-screen', className)}>
            <HashLoader color="#FF11E7" />
        </div>
    );
}
