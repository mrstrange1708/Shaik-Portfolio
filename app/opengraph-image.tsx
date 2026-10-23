import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const alt = 'Shaik Junaid Sami | Full-Stack & Systems Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
    const photo = await readFile(
        join(process.cwd(), 'public/Assets/profile_pic.jpg'),
    );
    // profile_pic.jpg is actually PNG data
    const photoSrc = `data:image/png;base64,${photo.toString('base64')}`;

    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0 90px',
                    background: '#212121',
                    color: '#dedede',
                }}
            >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ fontSize: 34, color: '#b5b5b5' }}>
                        Shaik Junaid Sami
                    </div>
                    <div
                        style={{
                            fontSize: 96,
                            fontWeight: 800,
                            color: '#00f058',
                            lineHeight: 1,
                            marginTop: 24,
                        }}
                    >
                        FULL STACK
                    </div>
                    <div style={{ fontSize: 96, fontWeight: 800, lineHeight: 1 }}>
                        ENGINEER
                    </div>
                    <div style={{ fontSize: 28, color: '#b5b5b5', marginTop: 36 }}>
                        Web · Mobile · Backend · Cloud — theshaik.tech
                    </div>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
                <img
                    src={photoSrc}
                    width={340}
                    height={340}
                    style={{
                        borderRadius: 9999,
                        border: '6px solid #00f058',
                        objectFit: 'cover',
                    }}
                />
            </div>
        ),
        size,
    );
}
