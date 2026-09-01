export interface FitnessCalculationParams {
  height: number
  weight: number
  age: number
  gender: 'male' | 'female' | string
  activityFactor: number
}

export type BMICategoryKey = 'underweight' | 'healthy' | 'overweight' | 'obese'

export interface BMICategory {
  key: BMICategoryKey
  label: string
}

export interface FitnessMetrics {
  bmi: number
  bmr: number
  tdeeMaintain: number
  tdeeLoss: number
  tdeeGain: number
  category: BMICategory
}

export function calculateBMI(weightKg: number, heightCm: number): number {
  if (heightCm <= 0 || weightKg <= 0) return 0
  const heightM = heightCm / 100
  return Number((weightKg / (heightM * heightM)).toFixed(1))
}

export function getBMICategory(bmi: number): BMICategory {
  if (bmi < 18.5) return { key: 'underweight', label: 'Underweight' }
  if (bmi < 25.0) return { key: 'healthy', label: 'Healthy' }
  if (bmi < 30.0) return { key: 'overweight', label: 'Overweight' }
  return { key: 'obese', label: 'Obese' }
}

export function calculateBMR(
  weightKg: number,
  heightCm: number,
  age: number,
  gender: 'male' | 'female' | string
): number {
  if (weightKg <= 0 || heightCm <= 0 || age <= 0) return 0
  const genderOffset = gender === 'male' ? 5 : -161
  return Math.round(10 * weightKg + 6.25 * heightCm - 5 * age + genderOffset)
}

export function calculateTDEE(
  bmr: number,
  activityFactor: number
): { maintain: number; loss: number; gain: number } {
  const maintain = Math.round(bmr * activityFactor)
  return {
    maintain,
    loss: Math.round(maintain - 300),
    gain: Math.round(maintain + 300),
  }
}

export function calculateFitnessMetrics(
  params: FitnessCalculationParams
): FitnessMetrics | null {
  const { height, weight, age, gender, activityFactor } = params

  if (
    !height ||
    !weight ||
    !age ||
    !gender ||
    !activityFactor ||
    height <= 0 ||
    weight <= 0 ||
    age <= 0 ||
    activityFactor <= 0
  ) {
    return null
  }

  const bmi = calculateBMI(weight, height)
  const bmr = calculateBMR(weight, height, age, gender)
  const tdee = calculateTDEE(bmr, activityFactor)
  const category = getBMICategory(bmi)

  return {
    bmi,
    bmr,
    tdeeMaintain: tdee.maintain,
    tdeeLoss: tdee.loss,
    tdeeGain: tdee.gain,
    category,
  }
}
