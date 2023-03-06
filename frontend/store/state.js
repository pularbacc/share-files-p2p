export default {
  id_socket: null,
  con_socket: null,
  messages_socket: null,
  list_connect: [],
  current_connect: null,
  files_receive: [],

  urlSocket: "ws://localhost:5000",
  iceServers:[
    {
      urls: "stun:stun.l.google.com:19302",          
    },
  ],

  mess:null,


  /*urlSocket: "wss://gammazeta-api.herokuapp.com",
  iceServers: [
    {
      urls: "stun:stun.l.google.com:19302",

      username:
        "NpTr9aqoQ6UVh4Wcl8Gjd5MvQ-TD9MqDa8mF1QiwkszzQ7TacNocWcUYnzIqKOb0AAAAAGFsbAxnYW1tYXpldGE=",
      urls: [
        "stun:hk-turn1.xirsys.com",
        "turn:hk-turn1.xirsys.com:80?transport=udp",
        "turn:hk-turn1.xirsys.com:3478?transport=udp",
        "turn:hk-turn1.xirsys.com:80?transport=tcp",
        "turn:hk-turn1.xirsys.com:3478?transport=tcp",
        "turns:hk-turn1.xirsys.com:443?transport=tcp",
        "turns:hk-turn1.xirsys.com:5349?transport=tcp"
      ],
      credential: "7885ae4a-2f78-11ec-aa20-0242ac120004",
    },
  ],*/

}