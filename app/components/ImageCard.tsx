/* eslint-disable @next/next/no-img-element */

export default function ImageCard({ image }: any) {
  const tags = image.tags.split(',');

  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg'>
      <img className='w-full' src={image.webformatURL} alt='image' />
      <div className='px-6 py-4'>
        <div className='font-bold text-purple-600 text-xl mb-2'>
          Photo By {image.user}
        </div>
        <ul>
          <li>
            <strong>Views : </strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads : </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes : </strong>
            {image.likes}
          </li>
        </ul>
      </div>
      {tags.map((tag: string, index: number) => {
        return (
          <span
            key={index}
            className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
            {tag}
          </span>
        );
      })}
    </div>
  );
}
