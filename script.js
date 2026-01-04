const db = {
            easy: [
                { name: "Việt Nam", code: "vn", fact: "Việt Nam là nước xuất khẩu cà phê lớn thứ hai thế giới.", img: "https://images.unsplash.com/photo-1555944858-752c8a521210?w=400" },
                { name: "Hoa Kỳ", code: "us", fact: "Quốc kỳ Mỹ có 50 ngôi sao đại diện cho 50 tiểu bang.", img: "https://images.unsplash.com/photo-1508433957232-3107f5ec3045?w=400" },
                { name: "Nhật Bản", code: "jp", fact: "Nhật Bản là quốc gia của hoa anh đào và núi Phú Sĩ.", img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400" },
                { name: "Pháp", code: "fr", fact: "Tháp Eiffel tại Paris là biểu tượng nổi tiếng nhất của Pháp.", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400" },
                { name: "Hàn Quốc", code: "kr", fact: "Hàn Quốc có nền văn hóa K-Pop phát triển rất mạnh mẽ.", img: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400" },
                { name: "Anh", code: "gb", fact: "Nước Anh nổi tiếng với đồng hồ Big Ben và xe buýt 2 tầng.", img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400" },
                { name: "Trung Quốc", code: "cn", fact: "Gấu trúc là biểu tượng và kho báu quốc gia của Trung Quốc.", img: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400" },
                { name: "Thái Lan", code: "th", fact: "Thái Lan được biết đến như xứ sở của những nụ cười.", img: "https://images.unsplash.com/photo-1528181304800-2f143c8c798d?w=400" },
                { name: "Úc", code: "au", fact: "Chuột túi (Kangaroo) chỉ sống tự nhiên ở nước Úc.", img: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=400" },
                { name: "Canada", code: "ca", fact: "Canada có nhiều hồ nước ngọt hơn bất kỳ nước nào.", img: "https://images.unsplash.com/photo-1517935703635-275d25e40638?w=400" }
            ],
            medium: [
                { name: "Thụy Điển", code: "se", fact: "Thụy Điển là nơi ra đời của giải thưởng Nobel.", img: "https://images.unsplash.com/photo-1509339022327-1e1e25360a41?w=400" },
                { name: "Hy Lạp", code: "gr", fact: "Hy Lạp là nơi khai sinh ra Thế vận hội Olympic.", img: "https://images.unsplash.com/photo-1503152394-c571994fd373?w=400" },
                { name: "Thổ Nhĩ Kỳ", code: "tr", fact: "Thổ Nhĩ Kỳ nằm ở cả châu Á và châu Âu.", img: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400" },
                { name: "Nga", code: "ru", fact: "Nga là quốc gia có diện tích lớn nhất thế giới.", img: "https://images.unsplash.com/photo-1513326738677-b964603b136d?w=400" },
                { name: "Ý", code: "it", fact: "Ý là quê hương của món Pizza và Mỳ Ý.", img: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=400" },
                { name: "Đức", code: "de", fact: "Đức là quê hương của các loại xe hơi nổi tiếng.", img: "https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?w=400" },
                { name: "Tây Ban Nha", code: "es", fact: "Tây Ban Nha có vũ điệu Flamenco rất sôi động.", img: "https://images.unsplash.com/photo-1543783230-27835842650d?w=400" },
                { name: "Hà Lan", code: "nl", fact: "Hà Lan nổi tiếng với hoa Tulip và cối xay gió.", img: "https://images.unsplash.com/photo-1518114055437-07e86638f25c?w=400" },
                { name: "Brazil", code: "br", fact: "Brazil là quốc gia giành được nhiều cúp World Cup nhất.", img: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400" },
                { name: "Ai Cập", code: "eg", fact: "Ai Cập cổ đại nổi tiếng với các Kim tự tháp.", img: "https://images.unsplash.com/photo-1503177119275-0aa32b3a7447?w=400" }
            ],
            hard: [
                { name: "Bhutan", code: "bt", fact: "Bhutan đo lường sự giàu có bằng chỉ số Hạnh phúc.", img: "https://images.unsplash.com/photo-1547333590-47fae5f58d21?w=400" },
                { name: "Iceland", code: "is", fact: "Iceland không có muỗi và có rất nhiều núi lửa.", img: "https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=400" },
                { name: "Nepal", code: "np", fact: "Nepal có đỉnh núi Everest cao nhất thế giới.", img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400" },
                { name: "Madagascar", code: "mg", fact: "Đảo này có loài vượn cáo Lemur rất đặc biệt.", img: "https://images.unsplash.com/photo-1521408892550-20ba8f381676?w=400" },
                { name: "Mông Cổ", code: "mn", fact: "Mông Cổ có mật độ dân số thấp nhất thế giới.", img: "https://images.unsplash.com/photo-1527334134460-f21a05ef62f3?w=400" },
                { name: "Maroc", code: "ma", fact: "Thành phố Marrakesh ở đây được gọi là Thành phố Đỏ.", img: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=400" },
                { name: "Senegal", code: "sn", fact: "Senegal có hồ Retba với nước màu hồng tự nhiên.", img: "https://images.unsplash.com/photo-1523841589119-b444fe093fa7?w=400" },
                { name: "Kazakhstan", code: "kz", fact: "Là nước không giáp biển có diện tích lớn nhất thế giới.", img: "https://images.unsplash.com/photo-1536413214590-502a5c9f559b?w=400" },
                { name: "Uzbekistan", code: "uz", fact: "Thành phố Samarkand từng là trung tâm Con đường Tơ lụa.", img: "https://images.unsplash.com/photo-1528644491124-2f7c04633a1e?w=400" },
                { name: "Ethiopia", code: "et", fact: "Đây là nơi đầu tiên phát hiện ra cây cà phê.", img: "https://images.unsplash.com/photo-1523805009345-7448845a9e13?w=400" }
            ]
        };

        let currentLevel = 'easy';
        let questionStack = [];
        let currentRound = 1;
        let score = 0;
        let timeLeft = 30;
        let timer;
        let targetCountry;

        document.addEventListener('DOMContentLoaded', () => {
            setupEventListeners();
            // Initial state: show menu screen, hide game screen
            document.getElementById('menu-screen').style.display = 'flex';
            document.getElementById('game-screen').style.display = 'none';
        });

        function setupEventListeners() {
            const levelCards = document.querySelectorAll('.level-card');
            levelCards.forEach(card => {
                card.addEventListener('click', () => {
                    const level = card.getAttribute('data-level');
                    startGame(level);
                });
            });

            const nextButton = document.querySelector('#fact-overlay .next-btn');
            if (nextButton) {
                nextButton.addEventListener('click', nextRound);
            }
        }

        function startGame(level) {
            currentLevel = level;
            currentRound = 1;
            score = 0;
            
            const pool = [...db[level]];
            questionStack = pool.sort(() => Math.random() - 0.5).slice(0, 10);
            
            timeLeft = (level === 'easy' ? 60 : (level === 'medium' ? 40 : 25));
            
            document.getElementById('menu-screen').style.display = 'none';
            document.getElementById('game-screen').style.display = 'flex';
            
            loadQuestion();
            startTimer();
        }

        function startTimer() {
            clearInterval(timer);
            timer = setInterval(() => {
                timeLeft--;
                document.getElementById('time').innerText = timeLeft;
                if(timeLeft <= 7) document.getElementById('timer-box').classList.add('timer-red');
                else document.getElementById('timer-box').classList.remove('timer-red');
                
                if(timeLeft <= 0) endGame("Hết giờ rồi! Hãy cố gắng hơn nhé.");
            }, 1000);
        }

        function loadQuestion() {
            document.getElementById('round').innerText = currentRound;
            document.getElementById('score').innerText = score;
            
            targetCountry = questionStack[currentRound - 1];
            const flagDisplay = document.getElementById('flag-display');
            flagDisplay.src = `https://flagcdn.com/w320/${targetCountry.code}.png`;
            flagDisplay.alt = `Flag of ${targetCountry.name}`;
            
            let options = [targetCountry];
            const allCountries = [...db.easy, ...db.medium, ...db.hard];
            
            while(options.length < 4) {
                let r = allCountries[Math.floor(Math.random() * allCountries.length)];
                if(!options.find(o => o.code === r.code)) options.push(r);
            }
            options.sort(() => Math.random() - 0.5);

            const optContainer = document.getElementById('options');
            optContainer.innerHTML = '';
            options.forEach(opt => {
                const btn = document.createElement('button');
                btn.className = 'opt-btn';
                btn.innerText = opt.name;
                btn.addEventListener('click', () => checkAnswer(opt, btn));
                optContainer.appendChild(btn);
            });
        }

        function checkAnswer(selected, btn) {
            const btns = document.querySelectorAll('.opt-btn');
            btns.forEach(b => b.disabled = true);

            if(selected.code === targetCountry.code) {
                btn.classList.add('correct');
                score += 10 + Math.floor(timeLeft / 2);
                showFact();
            } else {
                btn.classList.add('wrong');
                timeLeft = Math.max(0, timeLeft - 8);
                document.getElementById('time').innerText = timeLeft;
                setTimeout(() => {
                    btns.forEach(b => { b.disabled = false; b.classList.remove('wrong'); });
                }, 1000);
            }
        }

        function showFact() {
            document.getElementById('fact-text').innerText = targetCountry.fact;
            const factImage = document.getElementById('fact-image');
            factImage.src = targetCountry.img;
            factImage.alt = `Interesting fact about ${targetCountry.name}`;
            document.getElementById('fact-overlay').style.display = 'block';
        }

        function nextRound() {
            document.getElementById('fact-overlay').style.display = 'none';
            currentRound++;
            if(currentRound > 10) endGame("Tuyệt vời! Bạn đã hoàn thành thử thách.");
            else loadQuestion();
        }

        function endGame(msg) {
            clearInterval(timer);
            const overlay = document.createElement('div');
            overlay.style = "position:absolute; inset:0; background:rgba(255,255,255,0.95); z-index:100; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding:20px;";
            overlay.innerHTML = `
                <h1 style="color:var(--primary-color)">KẾT THÚC</h1>
                <p style="font-size:1.2rem">${msg}</p>
                <h2 style="font-size:3rem; margin:10px 0;">${score} ĐIỂM</h2>
                <button id="play-again-btn" class="next-btn" style="padding:15px 40px; font-size:1.2rem">Chơi lại</button>
            `;
            document.querySelector('.screen').appendChild(overlay);

            document.getElementById('play-again-btn').addEventListener('click', () => {
                location.reload();
            });
        }
    </script>
