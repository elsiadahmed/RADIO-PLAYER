class volume
{
	constructor()
	{
		this.audio_file=document.getElementById('audio_file');
		this.audio_file.volume=50/100;
		this.volume_rate=document.getElementById('volume_rate');
		this.sound_speed=document.getElementById('sound_speed');
		this.volume_rate.addEventListener("change",()=>
		{
			this.audio_file.volume=this.volume_rate.value/100;
		});
		this.sound_speed.playbackRate=1;
		this.sound_speed.addEventListener("change",()=>
		{			
			this.audio_file.playbackRate=this.sound_speed.value/100;
		});
	}
}
onload=new volume();