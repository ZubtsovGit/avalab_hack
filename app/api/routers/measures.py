# app/api/routers/measures.py
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List
from app.api.dependencies import get_db
from app.db.models.measure import Measure as MeasureModel
from app.schemas.measure import Measure
from app.api.routers.users import get_current_user
from app.ml.recommendation import get_recommendations
from app.ml.nlp import simplify_text

router = APIRouter()

@router.get("/", response_model=List[Measure])
def read_measures(
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(get_db)
):
    measures = db.query(MeasureModel).offset(skip).limit(limit).all()
    for measure in measures:
        measure.simplified_description = simplify_text(measure.description)
    return measures

@router.get("/recommendations", response_model=List[Measure])
def get_recommended_measures(
    db: Session = Depends(get_db),
    current_user: UserModel = Depends(get_current_user)
):
    recommendations = get_recommendations(current_user, db)
    return recommendations
