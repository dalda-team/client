import { SVGProps } from 'react';

function Search(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.6668 18.6667H19.6134L19.2401 18.3067C20.8401 16.44 21.6668 13.8933 21.2134 11.1867C20.5868 7.48001 17.4934 4.52001 13.7601 4.06668C8.1201 3.37334 3.37344 8.12001 4.06677 13.76C4.5201 17.4933 7.4801 20.5867 11.1868 21.2133C13.8934 21.6667 16.4401 20.84 18.3068 19.24L18.6668 19.6133V20.6667L24.3334 26.3333C24.8801 26.88 25.7734 26.88 26.3201 26.3333C26.8668 25.7867 26.8668 24.8933 26.3201 24.3467L20.6668 18.6667ZM12.6668 18.6667C9.34677 18.6667 6.66677 15.9867 6.66677 12.6667C6.66677 9.34668 9.34677 6.66668 12.6668 6.66668C15.9868 6.66668 18.6668 9.34668 18.6668 12.6667C18.6668 15.9867 15.9868 18.6667 12.6668 18.6667Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default Search;