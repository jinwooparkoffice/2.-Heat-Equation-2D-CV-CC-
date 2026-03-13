# 2D Heat Equation Calculator

2D 원통좌표계 열 방정식 시뮬레이션 도구입니다. Perovskite LED 소자의 열 거동을 분석합니다.

## 기능

- 2D 원통좌표계 열 방정식 시뮬레이션
- 다층 구조 지원 (Glass, ITO, HTL, Perovskite, ETL, Cathode 등)
- 실시간 진행률 추적
- 대류 및 복사 경계 조건 지원
- 시각화 및 결과 내보내기

## 시스템 요구사항

- Python 3.10 이상 (Python 3.13 권장)
- Node.js 18 이상
- pnpm 9 이상

**참고**: Python 3.13을 사용하는 경우 NumPy 2.0 이상이 필요합니다. Python 3.12 이하를 사용하는 경우에도 최신 버전의 패키지가 설치됩니다.

## 설치 및 실행

### 빠른 시작 (권장)

#### Windows
```cmd
# 1. 모든 의존성 설치 (Python + Node.js)
.\setup.bat

# 2. 백엔드와 프론트엔드 동시 실행
pnpm dev:all
```

#### macOS/Linux
```bash
# 1. 모든 의존성 설치 (Python + Node.js)
# 실행 권한은 자동으로 부여됩니다
bash setup.sh
# 또는
./setup.sh

# 2. 백엔드와 프론트엔드 동시 실행
pnpm dev:all:mac
```

### 수동 설치 및 실행

#### 1. Python 의존성 설치

**Windows:**
```cmd
python -m pip install -r requirements.txt
```

**macOS/Linux:**
```bash
python3 -m pip install -r requirements.txt
```

#### 2. 프론트엔드 설정

```bash
pnpm install
```

#### 3. 개발 서버 실행

**옵션 1: pnpm 스크립트 사용 (권장)**
- Windows: `pnpm dev:all`
- macOS/Linux: `pnpm dev:all:mac`

**옵션 2: 개별 실행**

터미널 1 - 백엔드:
```bash
# Windows
python app.py

# macOS/Linux
python3 app.py
```

터미널 2 - 프론트엔드:
```bash
pnpm dev
```

### 접속

- 프론트엔드: http://localhost:3000
- 백엔드 API: http://localhost:8080

## 프로젝트 구조

```
.
├── app.py                 # Flask 백엔드 서버
├── requirements.txt       # Python 의존성
├── package.json          # Node.js 의존성
├── src/                  # React 프론트엔드 소스
│   ├── App.jsx
│   └── App.css
├── setup.sh              # macOS/Linux 설치 스크립트
└── setup.bat             # Windows 설치 스크립트
```

## 주요 의존성

### Python
- Flask 3.0.0
- NumPy 1.26.2
- SciPy 1.11.4
- Numba 0.59.0

### Node.js
- React 18.2.0
- Vite 5.0.8
- Recharts 3.6.0

## 문제 해결

### 포트 충돌
기본 포트(8080)가 사용 중인 경우, 환경 변수로 변경:
```bash
# Windows PowerShell
$env:PORT=5001
python app.py

# macOS/Linux
PORT=5001 python app.py
```

## 라이선스

MIT License
