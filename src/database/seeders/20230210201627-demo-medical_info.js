'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Medical_Infos',
      [
        {
          info_id: Sequelize.literal('uuid_generate_v4()'),
          info_name:
            'Epilepsy, fits, blackouts, fainting turns or unexplained loss of consciousness?',
          info_description: '',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          info_id: Sequelize.literal('uuid_generate_v4()'),
          info_name: 'Vertigo, dizziness, giddiness, problems with balance?',
          info_description: '',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          info_id: Sequelize.literal('uuid_generate_v4()'),
          info_name: 'Recurrent headache or migraine?',
          info_description: '',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          info_id: Sequelize.literal('uuid_generate_v4()'),
          info_name:
            'Diseases of nervous system e.g neuritis, stroke, multiple sclerosis?',
          info_description: '',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          info_id: Sequelize.literal('uuid_generate_v4()'),
          info_name: 'Chest pain, angina, heart disease or breathlessness?',
          info_description: '',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          info_id: Sequelize.literal('uuid_generate_v4()'),
          info_name:
            'Any visual defect e.g. scotoma, blindness in one eye, reduced visual field, blurred vision, coloured blind?',
          info_description: '',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          info_id: Sequelize.literal('uuid_generate_v4()'),
          info_name: 'Raised or low blood pressure?',
          info_description: '',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          info_id: Sequelize.literal('uuid_generate_v4()'),
          info_name: 'Any blood disorder?',
          info_description: '',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          info_id: Sequelize.literal('uuid_generate_v4()'),
          info_name:
            'Asthma, bronchitis, emphysema, pneumonia or any other lung disease?',
          info_description: '',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          info_id: Sequelize.literal('uuid_generate_v4()'),
          info_name:
            'Jaundice or any form of hepatitis or other liver problem?',
          info_description: '',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          info_id: Sequelize.literal('uuid_generate_v4()'),
          info_name: 'Any kidney or bladder conditions?',
          info_description: '',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          info_id: Sequelize.literal('uuid_generate_v4()'),
          info_name: 'Arthritis, gout, chondromalcia patellae or rheumatism?',
          info_description: '',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          info_id: Sequelize.literal('uuid_generate_v4()'),
          info_name:
            'Any metabolic disorder including diabetes, thyroid and adrenal gland disease?',
          info_description: '',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          info_id: Sequelize.literal('uuid_generate_v4()'),
          info_name:
            'Psoriasis, eczema, allergic skin rash or other skin disorder?',
          info_description: '',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          info_id: Sequelize.literal('uuid_generate_v4()'),
          info_name: 'Any infectious diseases?',
          info_description: '',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          info_id: Sequelize.literal('uuid_generate_v4()'),
          info_name:
            'Anxiety/depression, mental breakdown or stress related problems?',
          info_description: '',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          info_id: Sequelize.literal('uuid_generate_v4()'),
          info_name: 'Sleep related issues?',
          info_description: '',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          info_id: Sequelize.literal('uuid_generate_v4()'),
          info_name: 'Substence misuse (e.g drugs, steroids)?',
          info_description: '',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          info_id: Sequelize.literal('uuid_generate_v4()'),
          info_name: 'Any malignancies or cancers?',
          info_description: '',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          info_id: Sequelize.literal('uuid_generate_v4()'),
          info_name: 'Any operations or surgical procedures?',
          info_description: '',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          info_id: Sequelize.literal('uuid_generate_v4()'),
          info_name: 'Ear or hearing problems?',
          info_description: '',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          info_id: Sequelize.literal('uuid_generate_v4()'),
          info_name:
            'Have you ever consulted any orthopaedic surgeon, chiropractor, osteopath or physiotherapist?',
          info_description: '',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          info_id: Sequelize.literal('uuid_generate_v4()'),
          info_name:
            'Current treatment. Are you currently attending a hospital/GP for treatment or waiting for an appointment?',
          info_description: '',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          info_id: Sequelize.literal('uuid_generate_v4()'),
          info_name: 'Any other medical condition we should be aware of?',
          info_description: '',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          info_id: Sequelize.literal('uuid_generate_v4()'),
          info_name:
            'Allergies: Do you have any known allergies or do you have any adverse reaction to drugs or medication?',
          info_description: '',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          info_id: Sequelize.literal('uuid_generate_v4()'),
          info_name: 'Do you currently take any medication?',
          info_description: '',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          info_id: Sequelize.literal('uuid_generate_v4()'),
          info_name: 'Smoking History. Do you or have you ever smoked?',
          info_description: '',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Medical_Infos', null, {});
  }
};
