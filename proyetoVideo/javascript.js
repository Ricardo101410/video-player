const $video = document.querySelector('#video')
    const $play = document.querySelector('#play')
    const $pause = document.querySelector('#pause')
    const $forward = document.querySelector('#forward')
    const $backward = document.querySelector('#backward')

    $play.addEventListener('click', handlePlay)
    $pause.addEventListener('click', handlePause)


    function handlePlay (){
        console.log('le diste click al boton al play')
        $video.play()
        $play.hidden = true
        $pause.hidden = false 
        

}

    function handlePause (){
        $video.pause()
        $pause.hidden = true
        $play.hidden = false
        console.log('le diste click al boton al pause')
    }

    $backward.addEventListener('click', handleBackward)

    function handleBackward (){

        $video.currentTime = $video.currentTime - 10
        /* tambien se puede usar de esta forma
        $video.currentTime -= 10 */
        console.log('para atras 10 segundos')

    
    }
    $forward.addEventListener('click', handleForward)

    function handleForward (){
        $video.currentTime = $video.currentTime + 10
        /* tambien se puede usar de esta forma
        $video.currentTime += 10 */
        console.log('para adelante 10 segundos', $video.currentTime)

    
    }

    const $progress = document.querySelector('#progress')

    $video.addEventListener('loadedmetadata', handleloaded)
    $video.addEventListener('timeupdate', handletimeupdate)
    
    function handleloaded (){
        $progress.max = $video.duration
        console.log('ha cargado el video', $video.duration)
    }

    function handletimeupdate (){
        $progress.value = $video.currentTime
        console.log('holi', $video.currentTime)
    }

    $progress.addEventListener('input', handleInput)

    function handleInput (){
        $video.currentTime = $progress.value
        console.log($progress.value)
    }