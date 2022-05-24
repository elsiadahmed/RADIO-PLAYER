class player
{
	constructor()
	{
		var heightmain=document.getElementById('player');
		heightmain.style.height=screen.height+"px";
		if(screen.width<500)
		{
			heightmain.style.width=screen.width+"px";
		}
		var content=document.getElementById('content');
		content.style.height=screen.height-300+"px";
	}
}
onload=new player();
//class buttons
class audio_player{
	constructor()
	{
		this.audio_file=document.getElementById('audio_file');
		this.title_audio=document.getElementById('title_radio');
		this.play_pause_button=document.getElementById('play_pause');
		this.isPlayed;		
		this.play_pause_button.addEventListener('click',()=>{this.play_pause();});
			
		this.names_radio=[];
		
		this.names_radio[0]="FRANCE INTER";
		this.names_radio[1]="BBC world service";
		this.names_radio[2]='TOP GOLD RADIO (ABLBANIA)';
		this.names_radio[3]='MY MUSIC 97.3 (ALBANIA)';
		this.names_radio[4]='TOP ALBANIA RADIO (ALBANIA)';		
		this.names_radio[5]='remix_music';
		this.source_audio=[];
		
		this.source_audio[0]='https://icecast.radiofrance.fr/franceinter-midfi.mp3';
		this.source_audio[1]='https://stream.live.vc.bbcmedia.co.uk/bbc_world_service';
		this.source_audio[2]='https://live.topgold.al/topgold';
		this.source_audio[3]='https://live.top-media.al/mmr';
		this.source_audio[4]='https://live.top-media.al/tar';
		this.source_audio[5]='remix_music.mp3';				
		this.server=0;
		this.setResource();
		document.getElementById('next').addEventListener('click',()=>
		{
			if(this.server<this.source_audio.length-1)
			{
				++this.server;
				this.isPlayed=false;
			}else
			{
				this.server=0;				
			}
			localStorage.setItem('save_position',this.server);
			this.setResource();
		});
		document.getElementById('back').addEventListener('click',()=>
		{
			if(this.server>0)
			{
				--this.server;this.isPlayed=false;
			}
			else
			{
				this.server=this.source_audio.length-1;
			}
			localStorage.setItem('save_position',this.server);
			this.setResource();
		});	
	}
	setResource()
	{
		if(localStorage.getItem('save_position')!=null)
		{
			this.server=localStorage.getItem('save_position');
		}
		this.audio_file.src=this.source_audio[this.server];
		this.title_audio.innerHTML=this.names_radio[this.server];
		this.play_pause();
	}	
	
	play_pause(){
		if(this.isPlayed==false){		
			this.play_pause_button.src="./img/pause.png";
			this.audio_file.play();
			this.isPlayed=true;
		}else{			
			this.play_pause_button.src="./img/play.png";
			this.audio_file.pause();
			this.isPlayed=false;
						
		}
	}
}
onload=new audio_player();
