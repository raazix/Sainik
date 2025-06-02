import { veteranApi, employerApi } from './api';

interface Skill {
  name: string;
  level: number;
}

interface JobRequirement {
  skill: string;
  importance: number;
}

interface MatchScore {
  overall: number;
  skills: { [key: string]: number };
  experience: number;
  education: number;
}

class MatchingService {
  private static instance: MatchingService;

  private constructor() {}

  public static getInstance(): MatchingService {
    if (!MatchingService.instance) {
      MatchingService.instance = new MatchingService();
    }
    return MatchingService.instance;
  }

  public async getJobMatches(veteranId: string): Promise<any[]> {
    try {
      const response = await veteranApi.getJobMatches();
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async getVeteranMatches(jobId: string): Promise<any[]> {
    try {
      const response = await employerApi.getApplications();
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public calculateMatchScore(
    veteranSkills: Skill[],
    jobRequirements: JobRequirement[],
    veteranExperience: number,
    requiredExperience: number,
    veteranEducation: string,
    requiredEducation: string
  ): MatchScore {
    // Calculate skill match
    const skillScores: { [key: string]: number } = {};
    let totalSkillScore = 0;

    jobRequirements.forEach(req => {
      const veteranSkill = veteranSkills.find(s => s.name.toLowerCase() === req.skill.toLowerCase());
      if (veteranSkill) {
        const score = (veteranSkill.level / 5) * req.importance;
        skillScores[req.skill] = score;
        totalSkillScore += score;
      } else {
        skillScores[req.skill] = 0;
      }
    });

    // Calculate experience match
    const experienceScore = Math.min(veteranExperience / requiredExperience, 1) * 100;

    // Calculate education match
    const educationScore = this.calculateEducationMatch(veteranEducation, requiredEducation);

    // Calculate overall score
    const overallScore = (totalSkillScore + experienceScore + educationScore) / 3;

    return {
      overall: Math.round(overallScore),
      skills: skillScores,
      experience: Math.round(experienceScore),
      education: Math.round(educationScore)
    };
  }

  private calculateEducationMatch(veteranEducation: string, requiredEducation: string): number {
    const educationLevels = {
      'high school': 1,
      'diploma': 2,
      'bachelor': 3,
      'master': 4,
      'phd': 5
    };

    const veteranLevel = educationLevels[veteranEducation.toLowerCase() as keyof typeof educationLevels] || 0;
    const requiredLevel = educationLevels[requiredEducation.toLowerCase() as keyof typeof educationLevels] || 0;

    if (veteranLevel >= requiredLevel) {
      return 100;
    } else {
      return (veteranLevel / requiredLevel) * 100;
    }
  }

  public async updateMatchPreferences(veteranId: string, preferences: any): Promise<void> {
    try {
      await veteranApi.updateProfile({ matchPreferences: preferences });
    } catch (error) {
      throw error;
    }
  }

  public async getRecommendedJobs(veteranId: string): Promise<any[]> {
    try {
      const response = await veteranApi.getJobMatches();
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async getRecommendedVeterans(jobId: string): Promise<any[]> {
    try {
      const response = await employerApi.getApplications();
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default MatchingService.getInstance(); 