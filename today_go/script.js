const btn = document.getElementById('draw-btn');
const nameDisplay = document.getElementById('station-name');
const moodDisplay = document.getElementById('station-mood');
const container = document.getElementById('main-container');

let currentStep = 'LINE'; 
let selectedLine = '';

btn.addEventListener('click', function() {
    if (currentStep === 'LINE') {
        let count = 0;
        btn.disabled = true;
        const lines = Object.keys(subwayData);
        
        const shuffleLine = setInterval(() => {
            const randomLine = lines[Math.floor(Math.random() * lines.length)];
            const lineColor = lineColors[randomLine] || lineColors.default;
            
            nameDisplay.innerText = randomLine;
            nameDisplay.style.color = lineColor;
            container.style.borderColor = lineColor;
            
            count++;

            if (count > 15) {
                clearInterval(shuffleLine);
                selectedLine = lines[Math.floor(Math.random() * lines.length)];
                const finalColor = lineColors[selectedLine] || lineColors.default;
                
                nameDisplay.innerText = selectedLine;
                nameDisplay.style.color = finalColor;
                container.style.borderColor = finalColor;
                
                moodDisplay.innerText = "어느 역으로 가세요??";
                btn.innerText = "역 뽑기!";
                btn.disabled = false;
                currentStep = 'STATION';
            }
        }, 50);

    } else if (currentStep === 'STATION') {
        let count = 0;
        btn.disabled = true;
        const stationsInLine = subwayData[selectedLine];
        const lineColor = lineColors[selectedLine] || lineColors.default;

        const shuffleStation = setInterval(() => {
            const randomStation = stationsInLine[Math.floor(Math.random() * stationsInLine.length)];
            nameDisplay.innerHTML = `
                <span style="font-size:18px; display:block; color:#888;">${selectedLine}</span>
                <span style="color:${lineColor}">${randomStation.name}</span>
            `;
            count++;

            if (count > 20) {
                clearInterval(shuffleStation);
                const finalStation = stationsInLine[Math.floor(Math.random() * stationsInLine.length)];
                
                // 최종 결과 색상 고정
                nameDisplay.innerHTML = `
                    <span style="font-size:18px; display:block; color:#888;">${selectedLine}</span>
                    <span style="color:${lineColor}">${finalStation.name}</span>
                `;
                
                moodDisplay.innerHTML = `
                    <div style="color:${lineColor}; font-weight:bold; margin-bottom:5px;">${finalStation.mood}</div>
                    <small style="color:#888;">${finalStation.exit}</small>
                `;
                
                container.style.borderColor = lineColor;
                container.style.boxShadow = `0 0 20px ${lineColor}44`;
                
                btn.innerText = "다시 하기";
                btn.disabled = false;
                currentStep = 'LINE';
            }
        }, 50);
    }
});