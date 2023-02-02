import { SVGProps } from 'react';

function Google(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="24" cy="24" r="23.5" stroke="#E2E2E2" />
      <path
        d="M34.1066 23.9067C34.1066 23.2045 34.0444 22.5378 33.9378 21.8889H23.8933V25.8978H29.6444C29.3866 27.2134 28.6311 28.3245 27.5111 29.08V31.7467H30.9422C32.9511 29.8889 34.1066 27.1511 34.1066 23.9067Z"
        fill="#4285F4"
      />
      <path
        d="M23.8933 34.3333C26.7733 34.3333 29.1822 33.3733 30.9422 31.7467L27.5111 29.08C26.5511 29.72 25.3333 30.1111 23.8933 30.1111C21.1111 30.1111 18.7555 28.2355 17.9111 25.7022H14.3733V28.4489C16.1244 31.9333 19.7244 34.3333 23.8933 34.3333Z"
        fill="#34A853"
      />
      <path
        d="M17.911 25.7022C17.6888 25.0622 17.5732 24.3778 17.5732 23.6667C17.5732 22.9556 17.6977 22.2711 17.911 21.6311V18.8845H14.3732C13.6443 20.3245 13.2266 21.9422 13.2266 23.6667C13.2266 25.3911 13.6443 27.0089 14.3732 28.4489L17.911 25.7022Z"
        fill="#FBBC05"
      />
      <path
        d="M23.8933 17.2222C25.4666 17.2222 26.8711 17.7644 27.9822 18.8222L31.0222 15.7822C29.1822 14.0578 26.7733 13 23.8933 13C19.7244 13 16.1244 15.4 14.3733 18.8844L17.9111 21.6311C18.7555 19.0978 21.1111 17.2222 23.8933 17.2222Z"
        fill="#EA4335"
      />
    </svg>
  );
}

export default Google;