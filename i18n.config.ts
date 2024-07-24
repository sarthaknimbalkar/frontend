export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",

  messages: {
    en: {
      nav: {
        home: "Home",
        train: "Training",
        result: "Result",
      },
      unit: {
        sec: "s",
        min: "m",
      },
      train: {
        title: "Configure Training",
        start: "Start Training",
      },
      training: {
        ready: "Get Ready!",
        trial: "Trial",
        timeSpent: "Time Spent:",
        accuracy: "Accuracy:",
        elapsed: "Elapsed Time:",
        typeAnswer:
          "Please type the characters you saw\n(Press Enter or space to submit)",
        correct: "Correct!\n(Press Enter or space to continue)",
        incorrect: "Incorrect!\n(Press Enter or space to continue)",
        sequencingInstruction:
          "Press the right arrow to move the cursor\n(press Enter or spacebar to select)",
        finish: "Finish!",
        continue: "Press spacebar or enter to continue",
        findMatch: "Find the matching character",
        remaining: " remaining",
        guess: "Press the key that matches the character getting revealed",
      },

      parameter: {
        durationMin: "Duration (min)",
        stimuliType: "Stimuli Type",
        stimuliLength: "Stimuli Length",
        presentationTime: "Presentation Time (s)",
        delayTime: "Delay Time (s)",
        promptType: "Prompt Type",
        promptLength: "Prompt Length",
        targetLength: "Target Length",
        targetCount: "Target Count",
        chunkSize: "Chunk Size",
        Numbers: "Numbers",
        Alphabet: "Alphabet",
        Alphanumeric: "Alphanumeric",
        Korean: "Korean",
        Sequential: "Sequential",
        Random: "Random",
        Small: "Small",
        Medium: "Medium",
        Large: "Large",
      },

      procedure: {
        "Rapid Visual Perception": "Rapid Visual Perception",
        "Sequential Visual Memory": "Sequential Visual Memory",
        "Character Sequencing": "Character Sequencing",
        "Character Matching": "Character Matching",
        "Character Guesstimate": "Character Guesstimate",
      },

      result: {
        date: "Date",
        doctor: "Doctor",
        patient: "Patient",
        trainingParameters: "Training Parameters",
        notesPlaceholder: "Write your notes here...",
        title: "Training Result",
        noData: "No Data Loaded",
        noDataDesc: "Please load a training result or start a new training.",
        download: "Download Result",
        goTrain: "Go Training",
        averageRevealed: "Average Revealed",
        averageRevealedDesc:
          "Average percentage of revealed chunks of a character",
        accuracy: "Accuracy",
        accuracyDesc: "Percentage of correct responses",
        averageAccuracy: "Average Accuracy",
        averageAccuracyDesc: "Average accuracy of all trials",
        trials: "Trials",
        trialsDesc: "Record of all trials performed",
        averageTrialTime: "Average Trial Time",
        averageTrialTimeDesc: "Average time spent on each trial (in seconds)",
        elapsedTime: "Elapsed Time",
        elapsedTimeDesc: "Actual time spent on training",
        trialCount: "Trial Count",
        trialCountDesc: "Number of trials performed",
        correctCount: "Correct Count",
        correctCountDesc: "Number of correct responses",
      },
    },
    ko: {
      unit: {
        sec: "초",
        min: "분",
      },
      nav: {
        home: "홈",
        train: "훈련",
        result: "결과",
      },
      train: {
        title: "훈련 설정",
        start: "훈련 시작",
      },
      training: {
        ready: "준비하세요!",
        trial: "시도",
        elapsed: "경과 시간:",
        timeSpent: "소요 시간:",
        accuracy: "정확도:",
        typeAnswer: "보았던 문자를 입력해주세요\n(엔터나 스페이스를 눌러 제출)",
        correct: "정답입니다!\n(엔터나 스페이스를 눌러 계속)",
        incorrect: "오답입니다!\n(엔터나 스페이스를 눌러 계속)",
        sequencingInstruction:
          "오른쪽 화살표를 눌러 커서를 이동하세요\n(엔터나 스페이스를 눌러 선택)",
        finish: "완료!",
        continue: "계속하려면 스페이스나 엔터를 눌러주세요",
        findMatch: "보기와 일치하는 문자를 찾으세요",
        remaining: "개 남음",
        guess: "서서히 보야지는 문자와 일치하는 키를 눌러주세요",
      },
      parameter: {
        durationMin: "시간 (분)",
        stimuliType: "문자 종류",
        stimuliLength: "문자 길이",
        presentationTime: "표시 시간 (초)",
        delayTime: "지연 시간 (초)",
        promptType: "프롬프트 종류",
        promptLength: "프롬프트 길이",
        targetLength: "정답 길이",
        targetCount: "정답 개수",
        chunkSize: "블록 크기",
        Numbers: "숫자",
        Alphabet: "알파벳",
        Alphanumeric: "알파벳 + 숫자",
        Korean: "한글",
        Sequential: "순차적",
        Random: "임의",
        Small: "소",
        Medium: "중",
        Large: "대",
      },
      procedure: {
        "Rapid Visual Perception": "빠른 시각 인지",
        "Sequential Visual Memory": "순차적 시각 기억",
        "Character Sequencing": "문자 시퀀싱",
        "Character Matching": "문자 매칭",
        "Character Guesstimate": "문자 추정",
      },

      result: {
        date: "날짜",
        doctor: "의사",
        patient: "환자",
        trainingParameters: "훈련 설정",
        notesPlaceholder: "메모를 입력해주세요",
        title: "훈련 결과",
        noData: "데이터 없음",
        download: "결과 다운로드",
        noDataDesc: "훈련 결과를 불러오거나 새로운 훈련을 시작해주세요.",
        goTrain: "훈련 하기",
        averageRevealed: "평균 드러난 정도",
        averageRevealedDesc: "문자의 평균 드러난 블록 비율",
        accuracy: "정확도",
        accuracyDesc: "정답 비율",
        averageAccuracy: "평균 정확도",
        averageAccuracyDesc: "모든 시도의 평균 정확도",
        trials: "시도",
        trialsDesc: "모든 시도의 기록",
        averageTrialTime: "평균 시도 시간",
        averageTrialTimeDesc: "각 시도에 소요된 평균 시간 (초)",
        elapsedTime: "경과 시간",
        elapsedTimeDesc: "훈련에 소요된 실제 시간",
        trialCount: "시도 횟수",
        trialCountDesc: "실행된 시도의 수",
        correctCount: "정답 수",
        correctCountDesc: "정답 응답의 수",
      },
    },

    es: {
      nav: {
        home: "Inicio",
        train: "Entrenamiento",
        result: "Resultado",
      },
      unit: {
        sec: "s",
        min: "m",
      },
      train: {
        title: "Configurar Entrenamiento",
        start: "Iniciar Entrenamiento",
      },
      training: {
        ready: "¡Prepárate!",
        trial: "Ensayo",
        timeSpent: "Tiempo Gastado:",
        accuracy: "Precisión:",
        elapsed: "Tiempo Transcurrido:",
        typeAnswer:
          "Por favor, escribe los caracteres que viste\n(Presiona Enter o espacio para enviar)",
        correct: "¡Correcto!\n(Presiona Enter o espacio para continuar)",
        incorrect: "¡Incorrecto!\n(Presiona Enter o espacio para continuar)",
        sequencingInstruction:
          "Presiona la flecha derecha para mover el cursor\n(presiona Enter o espacio para seleccionar)",
        finish: "¡Terminar!",
        continue: "Presiona barra espaciadora o Enter para continuar",
        findMatch: "Encuentra el carácter coincidente",
        remaining: " restantes",
        guess:
          "Presiona la tecla que coincide con el carácter que se está revelando",
      },
      parameter: {
        durationMin: "Duración (min)",
        stimuliType: "Tipo de Estímulo",
        stimuliLength: "Longitud del Estímulo",
        presentationTime: "Tiempo de Presentación (s)",
        delayTime: "Tiempo de Retardo (s)",
        promptType: "Tipo de Prompt",
        promptLength: "Longitud del Prompt",
        targetLength: "Longitud del Objetivo",
        targetCount: "Cantidad de Objetivos",
        chunkSize: "Tamaño del Bloque",
        Numbers: "Números",
        Alphabet: "Alfabeto",
        Alphanumeric: "Alfanumérico",
        Korean: "Coreano",
        Sequential: "Secuencial",
        Random: "Aleatorio",
        Small: "Pequeño",
        Medium: "Mediano",
        Large: "Grande",
      },
      procedure: {
        "Rapid Visual Perception": "Percepción Visual Rápida",
        "Sequential Visual Memory": "Memoria Visual Secuencial",
        "Character Sequencing": "Secuenciación de Caracteres",
        "Character Matching": "Emparejamiento de Caracteres",
        "Character Guesstimate": "Estimación de Caracteres",
      },
      result: {
        date: "Fecha",
        doctor: "Doctor",
        patient: "Paciente",
        trainingParameters: "Parámetros de Entrenamiento",
        notesPlaceholder: "Escribe tus notas aquí...",
        title: "Resultado del Entrenamiento",
        noData: "No se Cargaron Datos",
        noDataDesc:
          "Por favor, carga un resultado de entrenamiento o inicia un nuevo entrenamiento.",
        download: "Descargar Resultado",
        goTrain: "Ir al Entrenamiento",
        averageRevealed: "Promedio Revelado",
        averageRevealedDesc:
          "Porcentaje promedio de bloques revelados de un carácter",
        accuracy: "Precisión",
        accuracyDesc: "Porcentaje de respuestas correctas",
        averageAccuracy: "Precisión Promedio",
        averageAccuracyDesc: "Precisión promedio de todos los ensayos",
        trials: "Ensayos",
        trialsDesc: "Registro de todos los ensayos realizados",
        averageTrialTime: "Tiempo Promedio por Ensayo",
        averageTrialTimeDesc:
          "Tiempo promedio gastado en cada ensayo (en segundos)",
        elapsedTime: "Tiempo Transcurrido",
        elapsedTimeDesc: "Tiempo real gastado en el entrenamiento",
        trialCount: "Cantidad de Ensayos",
        trialCountDesc: "Número de ensayos realizados",
        correctCount: "Cantidad de Correctas",
        correctCountDesc: "Número de respuestas correctas",
      },
    },
  },
}));
