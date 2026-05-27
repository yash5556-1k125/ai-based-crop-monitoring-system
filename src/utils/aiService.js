export const analyzeImage = async (file, context = { location: 'Central India', farmSize: 1 }) => {
  // Simulate AI Processing Delay
  return new Promise((resolve) => {
    setTimeout(() => {
      // Base predictions for 1 Acre
      const possibleResults = [
        {
          disease: "Early Blight (Alternaria solani)",
          confidence: 94,
          description: `Detected concentric rings on lower leaves. Monitored weather in ${context.location} indicates higher humidity.`,
          waterQuantity: "Reduce by 15%",
          waterDetails: "Soil moisture is already adequate. Over-watering encourages fungal growth.",
          severity: "Moderate",
          fertilizer: `Apply ${50 * context.farmSize}kg Calcium Nitrate (CaNO3) total for your ${context.farmSize} acres. Avoid Nitrogen-heavy fertilizers.`,
          pesticide: `Use ${2 * context.farmSize}kg Chlorothalonil or Copper Fungicide. Remove infected leaves immediately.`,
          cvMetrics: {
            lai: "3.2 (Sub-optimal)",
            fruitCount: 14,
            nutrientMap: "Potassium levels normal. Nitrogen low in lower leaves."
          }
        },
        {
          disease: "Healthy",
          confidence: 98,
          description: `No signs of pathogenic infections or pest damage. Weather in ${context.location} is currently favorable.`,
          waterQuantity: "Maintain Routine",
          waterDetails: "Irrigate 1.5 liters per plant at down. Current soil moisture is optimal.",
          severity: "Low",
          fertilizer: `Continue standard NPK 20-20-20 application every two weeks for your ${context.farmSize} acres.`,
          pesticide: "No immediate action required. Continue routine neem oil spray.",
          cvMetrics: {
            lai: "4.8 (Dense/Optimal)",
            fruitCount: 42,
            nutrientMap: "All macro-nutrients balanced. Uniform chlorophyll distribution."
          }
        },
        {
          disease: "Nitrogen Deficiency",
          confidence: 89,
          description: `Lower leaves showing distinctive uniform yellowing (chlorosis), common in ${context.location} soil profiles.`,
          waterQuantity: "Increase slightly",
          waterDetails: "Ensure soil is consistently moist to allow nutrient uptake, but avoid waterlogging.",
          severity: "High",
          fertilizer: `Urgent: Apply ${40 * context.farmSize}kg Urea mixed with irrigation water for your ${context.farmSize} acres.`,
          pesticide: "None required. Issue is strictly nutritional.",
          cvMetrics: {
            lai: "2.5 (Poor)",
            fruitCount: 8,
            nutrientMap: "Severe Nitrogen loss detected globally across canopy scan."
          }
        },
        {
          disease: "Powdery Mildew (Erysiphe necator)",
          confidence: 96,
          description: `White, dusty fungal growth detected on leaf surface. Spreads rapidly in moderate temperatures monitored in ${context.location}.`,
          waterQuantity: "Maintain Routine - Do NOT overhead water",
          waterDetails: "Irrigate directly at the base using drip line to avoid wetting the foliage.",
          severity: "High",
          fertilizer: `Maintain current regimen for your ${context.farmSize} acres. Do not over-apply Nitrogen.`,
          pesticide: `Apply ${1.5 * context.farmSize}kg Sulfur-based fungicide or Potassium Bicarbonate.`,
          cvMetrics: {
            lai: "3.5 (Moderate)",
            fruitCount: 22,
            nutrientMap: "Nutrient flow blocked in upper canopy segments."
          }
        },
        {
          disease: "Potassium Deficiency",
          confidence: 91,
          description: `Identified significant yellowing and scorch marks strictly along the leaf margins.`,
          waterQuantity: "Increase slightly",
          waterDetails: "Potassium uptake requires adequate soil moisture. Ensure deep watering.",
          severity: "Moderate",
          fertilizer: `Urgent: Apply ${25 * context.farmSize}kg Potassium Sulfate (SOP) across your ${context.farmSize} acres.`,
          pesticide: "None required. Strictly nutritional.",
          cvMetrics: {
            lai: "2.8 (Sparse)",
            fruitCount: 5,
            nutrientMap: "Severe Potassium drop-off at leaf edges. Nitrogen stable."
          }
        },
        {
          disease: "Spider Mite Infestation",
          confidence: 93,
          description: `Detected dense yellow stippling and micro-webbing on the underside of the foliage. Highly correlated with the arid conditions in ${context.location}.`,
          waterQuantity: "Increase Foliar Hydration",
          waterDetails: "Spider mites thrive in dusty, dry conditions. Misting affects their breeding cycle.",
          severity: "High",
          fertilizer: `Suspend heavy fertilization. It encourages lush growth which attracts mites.`,
          pesticide: `Apply ${3 * context.farmSize} Liters of Abamectin or Horticultural Oils uniformly.`,
          cvMetrics: {
            lai: "3.0 (Sub-optimal)",
            fruitCount: 12,
            nutrientMap: "Chlorophyll destroyed evenly across stippled zones."
          }
        }
      ];
      // Parse filename to give deterministic mock results
      const filename = file?.name?.toLowerCase() || '';
      let selectedResult;

      if (filename.includes("blight") || filename.includes("tomato")) {
        selectedResult = possibleResults[0]; // Early Blight
      } else if (filename.includes("healthy") || filename.includes("corn")) {
        selectedResult = possibleResults[1]; // Healthy
      } else if (filename.includes("deficiency") || filename.includes("wheat") || filename.includes("nitrogen")) {
        selectedResult = possibleResults[2]; // Nitrogen Deficiency
      } else if (filename.includes("mildew") || filename.includes("grape")) {
        selectedResult = possibleResults[3]; // Powdery Mildew
      } else if (filename.includes("potassium") || filename.includes("soybean")) {
        selectedResult = possibleResults[4]; // Potassium Deficiency
      } else if (filename.includes("mite") || filename.includes("cotton")) {
        selectedResult = possibleResults[5]; // Spider Mite
      } else {
        // Fallback to random
        selectedResult = possibleResults[Math.floor(Math.random() * possibleResults.length)];
      }

      resolve(selectedResult);
    }, 2500); // 2.5 second fake delay
  });
};
