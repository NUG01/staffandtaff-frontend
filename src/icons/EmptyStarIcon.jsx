import React from 'react'

export default function EmptyStarIcon({ fill, id, clickStar }) {
    return (
        <svg
            onClick={() => clickStar(id)}
            id={id}
            style={{ cursor: 'pointer' }}
            width="29"
            height="27"
            viewBox="0 0 29 27"
            fill={fill ? '#F0A411' : 'none'}
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M14.7273 20.8433L14.2105 20.5314L13.6938 20.8433L6.93687 24.9215L8.71889 17.2359L8.85488 16.6494L8.4002 16.2548L2.43974 11.0818L10.3033 10.4037L10.9028 10.352L11.1379 9.7981L14.2105 2.55932L17.2832 9.7981L17.5183 10.352L18.1178 10.4037L25.9783 11.0815L20.0073 16.2542L19.5511 16.6494L19.6883 17.2372L21.4804 24.9192L14.7273 20.8433Z"
                stroke="#F0A411"
                stroke-width="2"
            />
        </svg>
    )
}
