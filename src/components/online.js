import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ server = "sg" }) {

  const { data, error } = useSWR(
    `https://${server}.game.yuuki.me/status/server`,
    fetcher
  );

  //console.log("tes", data);
  if(server == "sg"){
    server = "Singapore"
  }
  if(server == "de"){
    server = "German"
  }
  var online = "?";
  if(data){
    if(data.status){
      if(data.status.playerCount){
        online = data.status.playerCount;
      }
    }
  }
  
  return (

      <div class="stat">
        <div class="stat-title">{server}</div>
        <div class="stat-value">{online}</div>
        <div class="stat-desc">currently online</div>
      </div>

  );
}