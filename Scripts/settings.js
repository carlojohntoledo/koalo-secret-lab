
        const settingsbtn = document.getElementById('settings-btn');
        const settingscont = document.getElementById('settings-container');
        const settingsbg = document.getElementById('settings-background');
        const extbtn = document.getElementById('ext-btn');

        settingsbtn.addEventListener('click', showSettings);
        extbtn.addEventListener('click', hideSettings);


        function showSettings()
        {
            settingsbtn.style.display = 'none';
            settingscont.style.display = 'flex';
            settingsbg.style.backdropFilter = 'brightness(60%)';
        }

        function hideSettings()
        {
            settingsbtn.style.display = 'flex';
            settingscont.style.display = 'none';
            settingsbg.style.backdropFilter = 'brightness(100%)';
        }

        const maxBars = 10;
        let sfxcurrentVolume = 5;
        let bgmcurrentVolume = 5;

        const sfxBarContainer = document.getElementById('sfxBarContainer');
        const sfxMinusButton = document.getElementById('sfxminus');
        const sfxPlusButton = document.getElementById('sfxplus');

        clickSfx.volume = sfxcurrentVolume / maxBars;
        bgMusic.volume = bgmcurrentVolume / maxBars;

        // Function to update the volume display
        function updateSfxBars() {
            sfxBarContainer.innerHTML = ''; // Clear existing bars
            for (let i = 0; i < sfxcurrentVolume; i++) {
                const sfxbar = document.createElement('div');
                sfxbar.classList.add('sfxbar');
                sfxBarContainer.appendChild(sfxbar);
            }
        }

        // Decrease volume
        sfxMinusButton.addEventListener('click', () => {
            if (sfxcurrentVolume > 0) {
                sfxcurrentVolume--;
                updateSfxBars();
            }
            clickSfx.volume = sfxcurrentVolume / maxBars;
            console.log("sfx current volume: "+sfxcurrentVolume);
            
        });

        // Increase volume
        sfxPlusButton.addEventListener('click', () => {
            if (sfxcurrentVolume < maxBars) {
                sfxcurrentVolume++;
                updateSfxBars();
            }
            clickSfx.volume = sfxcurrentVolume / maxBars;
            
            console.log("sfx current volume: "+sfxcurrentVolume);
        });

        // Initialize with 1 bar
        updateSfxBars();


        const bgmBarContainer = document.getElementById('bgmBarContainer');
        const bgmMinusButton = document.getElementById('bgmminus');
        const bgmPlusButton = document.getElementById('bgmplus');

        // Function to update the volume display
        function updateBgmBars() {
            bgmBarContainer.innerHTML = ''; // Clear existing bars
            for (let i = 0; i < bgmcurrentVolume; i++) {
                const bgmbar = document.createElement('div');
                bgmbar.classList.add('bgmbar');
                bgmBarContainer.appendChild(bgmbar);
            }
        }

        

        // Decrease volume
        bgmMinusButton.addEventListener('click', () => {
            if (bgmcurrentVolume > 0) {
                bgmcurrentVolume--;
                updateBgmBars();
            }
            bgMusic.volume = bgmcurrentVolume / maxBars;
            console.log("bgm current volume: "+bgmcurrentVolume);
        });

        // Increase volume
        bgmPlusButton.addEventListener('click', () => {
            if (bgmcurrentVolume < maxBars) {
                bgmcurrentVolume++;
                updateBgmBars();
            }
            bgMusic.volume = bgmcurrentVolume / maxBars;
            console.log("bgm current volume: "+bgmcurrentVolume);
        });

        // Initialize with 1 bar
        updateBgmBars();
