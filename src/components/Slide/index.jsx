export default function Slide({ name, url, clone_url, className, padding, color, forks_count, stargazers, size }) {
  
  let copyOnClick = () => {
    let f = function(e) {
      e.clipboardData.setData('text/plain', `git clone ${clone_url}`);
      e.preventDefault();
    };
    document.addEventListener('copy', f, true);
    document.execCommand('copy');  
    document.removeEventListener('copy', f);
  }
  
  return (
    <div
      className={className}
      style={{
        backgroundColor: color,
        marginLeft: padding * 20,
        zIndex: -padding
      }}
    >
      <h4>{name}</h4>
      <p>stars: {stargazers}, forks: {forks_count}, size: {size}</p>
      <div>
        <button onClick={copyOnClick}>clone_url</button>
        <a href={url} target="_blank">Open in GH</a>
      </div>
    </div>
  );
}