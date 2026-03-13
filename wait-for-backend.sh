#!/bin/bash
# 백엔드 서버가 준비될 때까지 기다리는 스크립트

BACKEND_URL="http://localhost:8080"
MAX_ATTEMPTS=30
ATTEMPT=0

echo "⏳ 백엔드 서버 시작 대기 중..."

while [ $ATTEMPT -lt $MAX_ATTEMPTS ]; do
    if curl -s -f "$BACKEND_URL/" > /dev/null 2>&1; then
        echo "✅ 백엔드 서버가 준비되었습니다!"
        exit 0
    fi
    
    ATTEMPT=$((ATTEMPT + 1))
    echo "   시도 $ATTEMPT/$MAX_ATTEMPTS..."
    sleep 1
done

echo "❌ 백엔드 서버가 시작되지 않았습니다. ($BACKEND_URL)"
exit 1
