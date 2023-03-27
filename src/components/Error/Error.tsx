import { memo, FC } from 'react'

interface ErrorProps {
    errStatus: number;
}

const Error: FC<ErrorProps> = ({errStatus}) => {
    return (
        <>
            <h3>
                Error with status code {errStatus}
            </h3>
        </>
    )
}

export default memo(Error)