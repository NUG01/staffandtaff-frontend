import React from 'react'

export default function SocialLinks({ data }) {
    return (
        <div
            style={{
                position: 'absolute',
                top: '100px',
                left: '-15%',
                display: 'flex',
                flexDirection: 'column',
                gap: '30px',
            }}>
            {data.linkedin && (
                <a
                    href={data.linkedin}
                    target="_blank"
                    rel="noreferrer noopener">
                    <i
                        style={{
                            color: '#604235',
                            fontSize: '24px',
                        }}
                        className="fa-brands fa-linkedin"></i>
                </a>
            )}
            {data.facebook && (
                <a
                    href={data.facebook}
                    target="_blank"
                    rel="noreferrer noopener">
                    <i
                        style={{
                            color: '#604235',
                            fontSize: '24px',
                        }}
                        className="fa-brands fa-facebook"></i>
                </a>
            )}
            {data.instagram && (
                <a
                    href={data.instagram}
                    target="_blank"
                    rel="noreferrer noopener">
                    <i
                        style={{
                            color: '#604235',
                            fontSize: '24px',
                        }}
                        className="fa-brands fa-instagram"></i>
                </a>
            )}
            {data.twitter && (
                <a
                    href={data.twitter}
                    target="_blank"
                    rel="noreferrer noopener">
                    <i
                        style={{
                            color: '#604235',
                            fontSize: '24px',
                        }}
                        className="fa-brands fa-twitter"></i>
                </a>
            )}
            {data.pinterest && (
                <a
                    href={data.pinterest}
                    target="_blank"
                    rel="noreferrer noopener">
                    <i
                        style={{
                            color: '#604235',
                            fontSize: '24px',
                        }}
                        className="fa-brands fa-pinterest"></i>
                </a>
            )}
            {data.youtube && (
                <a
                    href={data.youtube}
                    target="_blank"
                    rel="noreferrer noopener">
                    <i
                        style={{
                            color: '#604235',
                            fontSize: '24px',
                        }}
                        className="fa-brands fa-youtube"></i>
                </a>
            )}
            {data.tiktok && (
                <a href={data.tiktok} target="_blank" rel="noreferrer noopener">
                    <i
                        style={{
                            color: '#604235',
                            fontSize: '24px',
                        }}
                        className="fa-brands fa-tiktok"></i>
                </a>
            )}
            {data.website && (
                <a
                    href={data.website}
                    target="_blank"
                    rel="noreferrer noopener">
                    <i
                        style={{
                            color: '#604235',
                            fontSize: '24px',
                        }}
                        className="fa-brands fa-earth-americas"></i>
                </a>
            )}
        </div>
    )
}
