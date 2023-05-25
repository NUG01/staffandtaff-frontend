import React from 'react'

export default function AddExperienceIcon({}) {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'start',
                justifyContent: 'start',
                gap: '10px',
                cursor: 'pointer',
            }}>
            <div
                style={{
                    position: 'relative',
                    display: 'flex',
                    alignSelf: 'start',
                }}>
                <svg
                    width="54"
                    height="54"
                    viewBox="0 0 54 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect
                        x="1"
                        y="1"
                        width="52"
                        height="52"
                        fill="white"
                        stroke="#EBEBEB"
                        strokeWidth="2"
                    />
                </svg>
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}>
                    <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z"
                            fill="#757575"
                        />
                    </svg>
                </div>
            </div>
            <div
                style={{
                    height: '100%',
                    display: 'flex',
                    margin: 'auto 0',
                }}>
                <p>Ajouter une autre expérience professionnelle.</p>
            </div>
        </div>
    )
}
