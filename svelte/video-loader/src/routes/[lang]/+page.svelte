<script>
	let videoFile;
	let videoElement;
	let isInvalidDuration = false;
  
	const handleVideoUpload =async () => {
	  if (videoFile) {
		// Check if it's a valid video file
		console.log(videoFile)
		if (videoFile[0].type.includes('video/')) {
		  const videoBlob = await new Blob([videoFile], { type: videoFile.type });
		  const videoURL = await URL.createObjectURL(videoBlob);
		  console.log(videoURL)
  
		  videoElement.src = videoURL;
		  videoElement.onloadedmetadata = () => {
			if (videoElement.duration > 30) {
			  isInvalidDuration = true;
			} else {
			  isInvalidDuration = false;
			}
		  };
		} else {
		  // Handle the case where the selected file is not a video
		  console.error('Selected file is not a valid video.');
		}
	  }
	}
  
	// Rest of your code for cropping, styling, and backend handling...
  </script>
  
  <input type="file" accept="video/*" bind:files={videoFile}>
  <button on:click={handleVideoUpload}>Upload Video</button>
  
  {#if isInvalidDuration}
	<p style="color: red;">Video duration exceeds the maximum allowed (30 seconds).</p>
  {/if}
  
  {#if videoElement}
	 <!-- content here -->
	 <video bind:this={videoElement} controls></video>
	 {:else}
  		<div>sdfdsf</div>
  {/if}
  <!-- <button on:click={ha}>Crop Video</button> -->