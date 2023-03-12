'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Appointments',
      [
        {
          appointment_id: '0f957ec9-5bd3-4ad4-b605-638bd5fce2c0',
          appointment_number: 'AP63142611',
          client_id: '74277506-dc9d-456e-b7ec-dbdc7e421295',
          doctor_id: '64ff1279-8b59-4143-8e6c-a0c8f38bf9d5',
          schedule_id: '7d56a19f-c5cb-4db2-a539-8f7d8f91a972',
          _id: '624c8b72-d29b-455f-8179-c3d96a93a551',
          appointment_period: '07:30 - 08:00',
          is_canceled: false,
          cancel_date: null,
          is_set_to: 'expected',
          drugs: JSON.stringify([
            {
              name: 'Amlodipine',
              dosage: '0.5 mg',
              frequency_per_day: 'once a day',
              frequency_per_week: 'daily',
              duration: 'Amlodipine',
              start_date: '2023-03-11',
              end_date: '2023-03-19',
              explanation: 'Take in the morning on an empty stomach'
            }
          ]),
          recommendations: JSON.stringify([
            'Sleep not less than 7-8h/day',
            'Control sugar consumption',
            'Minimize stress',
            'Decrease alcohol consumption'
          ]),
          complaints:
            'Undoubtedly, eccentricity is theoretically possible. The motion , despite external influences , attracts a distant azimuth , the speed of a comet at perihelion , paradoxical though it may seem , oscillates an interplanetary meteorite.',
          diagnosis: 'Subclinical hypothyroidism. Latent iron deficiency',
          createdAt: '2023-03-11T17:56:07.369Z',
          updatedAt: '2023-03-11T17:56:07.369Z'
        },
        {
          appointment_id: '1c29d686-bcc5-4664-8eeb-a4d3dcc4027a',
          appointment_number: 'AP55937739',
          client_id: '74277506-dc9d-456e-b7ec-dbdc7e421295',
          doctor_id: '64ff1279-8b59-4143-8e6c-a0c8f38bf9d5',
          schedule_id: '7d56a19f-c5cb-4db2-a539-8f7d8f91a972',
          _id: '624c8b72-d29b-455f-8179-c3d96a93a551',
          appointment_period: '08:30 - 09:00',
          is_canceled: false,
          cancel_date: null,
          is_set_to: 'expected',
          drugs: JSON.stringify([
            {
              name: 'Amlodipine',
              dosage: '0.5 mg',
              frequency_per_day: 'once a day',
              frequency_per_week: 'daily',
              duration: 'Amlodipine',
              start_date: '2023-03-11',
              end_date: '2023-03-19',
              explanation: 'Take in the morning on an empty stomach'
            }
          ]),
          recommendations: JSON.stringify([
            'Sleep not less than 7-8h/day',
            'Control sugar consumption',
            'Minimize stress',
            'Decrease alcohol consumption'
          ]),
          complaints:
            'Undoubtedly, eccentricity is theoretically possible. The motion , despite external influences , attracts a distant azimuth , the speed of a comet at perihelion , paradoxical though it may seem , oscillates an interplanetary meteorite.',
          diagnosis: 'Subclinical hypothyroidism. Latent iron deficiency',
          createdAt: '2023-03-11T17:58:10.653Z',
          updatedAt: '2023-03-11T17:58:10.653Z'
        },
        {
          appointment_id: '199440da-7301-4085-ae27-6c74ec88c7e9',
          appointment_number: 'AP23253437',
          client_id: '74277506-dc9d-456e-b7ec-dbdc7e421295',
          doctor_id: '64ff1279-8b59-4143-8e6c-a0c8f38bf9d5',
          schedule_id: '7d56a19f-c5cb-4db2-a539-8f7d8f91a972',
          _id: '624c8b72-d29b-455f-8179-c3d96a93a551',
          appointment_period: '10:30 - 11:00',
          is_canceled: false,
          cancel_date: null,
          is_set_to: 'expected',
          drugs: JSON.stringify([
            {
              name: 'Amlodipine',
              dosage: '0.5 mg',
              frequency_per_day: 'once a day',
              frequency_per_week: 'daily',
              duration: 'Amlodipine',
              start_date: '2023-03-11',
              end_date: '2023-03-19',
              explanation: 'Take in the morning on an empty stomach'
            }
          ]),
          recommendations: JSON.stringify([
            'Sleep not less than 7-8h/day',
            'Control sugar consumption',
            'Minimize stress',
            'Decrease alcohol consumption'
          ]),
          complaints:
            'Undoubtedly, eccentricity is theoretically possible. The motion , despite external influences , attracts a distant azimuth , the speed of a comet at perihelion , paradoxical though it may seem , oscillates an interplanetary meteorite.',
          diagnosis: 'Subclinical hypothyroidism. Latent iron deficiency',
          createdAt: '2023-03-11T17:58:54.577Z',
          updatedAt: '2023-03-11T17:58:54.577Z'
        },
        {
          appointment_id: 'ae019e96-b0f0-4794-9bd3-5e0c79ce80bb',
          appointment_number: 'AP75833688',
          client_id: '74277506-dc9d-456e-b7ec-dbdc7e421295',
          doctor_id: '64ff1279-8b59-4143-8e6c-a0c8f38bf9d5',
          schedule_id: '7d56a19f-c5cb-4db2-a539-8f7d8f91a972',
          _id: '67bc655d-74e5-4a0b-b850-90241d8fb143',
          appointment_period: '07:30 - 08:00',
          is_canceled: false,
          cancel_date: null,
          is_set_to: 'expected',
          drugs: JSON.stringify([
            {
              name: 'Amlodipine',
              dosage: '0.5 mg',
              frequency_per_day: 'once a day',
              frequency_per_week: 'daily',
              duration: 'Amlodipine',
              start_date: '2023-03-11',
              end_date: '2023-03-19',
              explanation: 'Take in the morning on an empty stomach'
            }
          ]),
          recommendations: JSON.stringify([
            'Sleep not less than 7-8h/day',
            'Control sugar consumption',
            'Minimize stress',
            'Decrease alcohol consumption'
          ]),
          complaints:
            'Undoubtedly, eccentricity is theoretically possible. The motion , despite external influences , attracts a distant azimuth , the speed of a comet at perihelion , paradoxical though it may seem , oscillates an interplanetary meteorite.',
          diagnosis: 'Subclinical hypothyroidism. Latent iron deficiency',
          createdAt: '2023-03-11T18:05:29.429Z',
          updatedAt: '2023-03-11T18:05:29.429Z'
        },
        {
          appointment_id: '241a2c9c-e333-473a-a7ef-ef0972270f64',
          appointment_number: 'AP22312213',
          client_id: '74277506-dc9d-456e-b7ec-dbdc7e421295',
          doctor_id: '64ff1279-8b59-4143-8e6c-a0c8f38bf9d5',
          schedule_id: '7d56a19f-c5cb-4db2-a539-8f7d8f91a972',
          _id: '10bbeed7-9bce-4d49-a6e2-b46a65f568c2',
          appointment_period: '07:30 - 08:00',
          is_canceled: false,
          cancel_date: null,
          is_set_to: 'expected',
          drugs: JSON.stringify([
            {
              name: 'Amlodipine',
              dosage: '0.5 mg',
              frequency_per_day: 'once a day',
              frequency_per_week: 'daily',
              duration: 'Amlodipine',
              start_date: '2023-03-11',
              end_date: '2023-03-19',
              explanation: 'Take in the morning on an empty stomach'
            }
          ]),
          recommendations: JSON.stringify([
            'Sleep not less than 7-8h/day',
            'Control sugar consumption',
            'Minimize stress',
            'Decrease alcohol consumption'
          ]),
          complaints:
            'Undoubtedly, eccentricity is theoretically possible. The motion , despite external influences , attracts a distant azimuth , the speed of a comet at perihelion , paradoxical though it may seem , oscillates an interplanetary meteorite.',
          diagnosis: 'Subclinical hypothyroidism. Latent iron deficiency',
          createdAt: '2023-03-11T18:06:33.722Z',
          updatedAt: '2023-03-11T18:06:33.722Z'
        },
        {
          appointment_id: '3d9c3210-95ce-4d0a-90d4-2a616b8b4801',
          appointment_number: 'AP62649331',
          client_id: '74277506-dc9d-456e-b7ec-dbdc7e421295',
          doctor_id: '64ff1279-8b59-4143-8e6c-a0c8f38bf9d5',
          schedule_id: '7d56a19f-c5cb-4db2-a539-8f7d8f91a972',
          _id: '6ec8737c-8753-4b14-8fd0-7e816eb5a34e',
          appointment_period: '07:30 - 08:00',
          is_canceled: false,
          cancel_date: null,
          is_set_to: 'expected',
          drugs: JSON.stringify([
            {
              name: 'Amlodipine',
              dosage: '0.5 mg',
              frequency_per_day: 'once a day',
              frequency_per_week: 'daily',
              duration: 'Amlodipine',
              start_date: '2023-03-11',
              end_date: '2023-03-19',
              explanation: 'Take in the morning on an empty stomach'
            }
          ]),
          recommendations: JSON.stringify([
            'Sleep not less than 7-8h/day',
            'Control sugar consumption',
            'Minimize stress',
            'Decrease alcohol consumption'
          ]),
          complaints:
            'Undoubtedly, eccentricity is theoretically possible. The motion , despite external influences , attracts a distant azimuth , the speed of a comet at perihelion , paradoxical though it may seem , oscillates an interplanetary meteorite.',
          diagnosis: 'Subclinical hypothyroidism. Latent iron deficiency',
          createdAt: '2023-03-11T18:08:02.055Z',
          updatedAt: '2023-03-11T18:08:02.055Z'
        },
        {
          appointment_id: 'f9e03129-fb94-4d62-a30e-fd9745b4958c',
          appointment_number: 'AP92112654',
          client_id: '74277506-dc9d-456e-b7ec-dbdc7e421295',
          doctor_id: '64ff1279-8b59-4143-8e6c-a0c8f38bf9d5',
          schedule_id: '7d56a19f-c5cb-4db2-a539-8f7d8f91a972',
          _id: '7c9ee2cb-cc62-4d7b-9057-f18a1a2968fb',
          appointment_period: '07:30 - 08:00',
          is_canceled: false,
          cancel_date: null,
          is_set_to: 'expected',
          drugs: JSON.stringify([
            {
              name: 'Amlodipine',
              dosage: '0.5 mg',
              frequency_per_day: 'once a day',
              frequency_per_week: 'daily',
              duration: 'Amlodipine',
              start_date: '2023-03-11',
              end_date: '2023-03-19',
              explanation: 'Take in the morning on an empty stomach'
            }
          ]),
          recommendations: JSON.stringify([
            'Sleep not less than 7-8h/day',
            'Control sugar consumption',
            'Minimize stress',
            'Decrease alcohol consumption'
          ]),
          complaints:
            'Undoubtedly, eccentricity is theoretically possible. The motion , despite external influences , attracts a distant azimuth , the speed of a comet at perihelion , paradoxical though it may seem , oscillates an interplanetary meteorite.',
          diagnosis: 'Subclinical hypothyroidism. Latent iron deficiency',
          createdAt: '2023-03-11T18:08:36.637Z',
          updatedAt: '2023-03-11T18:08:36.637Z'
        },
        {
          appointment_id: '13cc1a0d-3263-45b2-93e0-541d3ba33ae6',
          appointment_number: 'AP95866969',
          client_id: '74277506-dc9d-456e-b7ec-dbdc7e421295',
          doctor_id: '64ff1279-8b59-4143-8e6c-a0c8f38bf9d5',
          schedule_id: '7d56a19f-c5cb-4db2-a539-8f7d8f91a972',
          _id: '9868cd35-09b9-4691-97e8-91e652c7e7cf',
          appointment_period: '07:30 - 08:00',
          is_canceled: false,
          cancel_date: null,
          is_set_to: 'expected',
          drugs: JSON.stringify([
            {
              name: 'Amlodipine',
              dosage: '0.5 mg',
              frequency_per_day: 'once a day',
              frequency_per_week: 'daily',
              duration: 'Amlodipine',
              start_date: '2023-03-11',
              end_date: '2023-03-19',
              explanation: 'Take in the morning on an empty stomach'
            }
          ]),
          recommendations: JSON.stringify([
            'Sleep not less than 7-8h/day',
            'Control sugar consumption',
            'Minimize stress',
            'Decrease alcohol consumption'
          ]),
          complaints:
            'Undoubtedly, eccentricity is theoretically possible. The motion , despite external influences , attracts a distant azimuth , the speed of a comet at perihelion , paradoxical though it may seem , oscillates an interplanetary meteorite.',
          diagnosis: 'Subclinical hypothyroidism. Latent iron deficiency',
          createdAt: '2023-03-11T18:09:16.512Z',
          updatedAt: '2023-03-11T18:09:16.512Z'
        },
        {
          appointment_id: '195279ff-04d7-413d-a83e-9ca884d773aa',
          appointment_number: 'AP84829988',
          client_id: '74277506-dc9d-456e-b7ec-dbdc7e421295',
          doctor_id: '64ff1279-8b59-4143-8e6c-a0c8f38bf9d5',
          schedule_id: '7d56a19f-c5cb-4db2-a539-8f7d8f91a972',
          _id: 'bcff625c-d226-4331-b317-9694694e958a',
          appointment_period: '07:30 - 08:00',
          is_canceled: false,
          cancel_date: null,
          is_set_to: 'expected',
          drugs: JSON.stringify([
            {
              name: 'Amlodipine',
              dosage: '0.5 mg',
              frequency_per_day: 'once a day',
              frequency_per_week: 'daily',
              duration: 'Amlodipine',
              start_date: '2023-03-11',
              end_date: '2023-03-19',
              explanation: 'Take in the morning on an empty stomach'
            }
          ]),
          recommendations: JSON.stringify([
            'Sleep not less than 7-8h/day',
            'Control sugar consumption',
            'Minimize stress',
            'Decrease alcohol consumption'
          ]),
          complaints:
            'Undoubtedly, eccentricity is theoretically possible. The motion , despite external influences , attracts a distant azimuth , the speed of a comet at perihelion , paradoxical though it may seem , oscillates an interplanetary meteorite.',
          diagnosis: 'Subclinical hypothyroidism. Latent iron deficiency',
          createdAt: '2023-03-11T18:09:59.065Z',
          updatedAt: '2023-03-11T18:09:59.065Z'
        },
        {
          appointment_id: '89741da2-e6ea-4f35-bc61-fc4d89bd9905',
          appointment_number: 'AP96242781',
          client_id: '74277506-dc9d-456e-b7ec-dbdc7e421295',
          doctor_id: '64ff1279-8b59-4143-8e6c-a0c8f38bf9d5',
          schedule_id: '7d56a19f-c5cb-4db2-a539-8f7d8f91a972',
          _id: '39807fd1-325f-4b94-ac39-22de9e2ffbe1',
          appointment_period: '09:30 - 10:00',
          is_canceled: false,
          cancel_date: null,
          is_set_to: 'expected',
          drugs: JSON.stringify([
            {
              name: 'Amlodipine',
              dosage: '0.5 mg',
              frequency_per_day: 'once a day',
              frequency_per_week: 'daily',
              duration: 'Amlodipine',
              start_date: '2023-03-11',
              end_date: '2023-03-19',
              explanation: 'Take in the morning on an empty stomach'
            }
          ]),
          recommendations: JSON.stringify([
            'Sleep not less than 7-8h/day',
            'Control sugar consumption',
            'Minimize stress',
            'Decrease alcohol consumption'
          ]),
          complaints:
            'Undoubtedly, eccentricity is theoretically possible. The motion , despite external influences , attracts a distant azimuth , the speed of a comet at perihelion , paradoxical though it may seem , oscillates an interplanetary meteorite.',
          diagnosis: 'Subclinical hypothyroidism. Latent iron deficiency',
          createdAt: '2023-03-11T18:12:08.873Z',
          updatedAt: '2023-03-11T18:12:08.873Z'
        },
        {
          appointment_id: 'f99a43d8-ff7c-4ece-a718-e3404d92e11f',
          appointment_number: 'AP58334912',
          client_id: '74277506-dc9d-456e-b7ec-dbdc7e421295',
          doctor_id: '64ff1279-8b59-4143-8e6c-a0c8f38bf9d5',
          schedule_id: '7d56a19f-c5cb-4db2-a539-8f7d8f91a972',
          _id: '32972af2-8d9d-42ee-a0dc-828cfbedab7b',
          appointment_period: '09:30 - 10:00',
          is_canceled: false,
          cancel_date: null,
          is_set_to: 'expected',
          drugs: JSON.stringify([
            {
              name: 'Amlodipine',
              dosage: '0.5 mg',
              frequency_per_day: 'once a day',
              frequency_per_week: 'daily',
              duration: 'Amlodipine',
              start_date: '2023-03-11',
              end_date: '2023-03-19',
              explanation: 'Take in the morning on an empty stomach'
            }
          ]),
          recommendations: JSON.stringify([
            'Sleep not less than 7-8h/day',
            'Control sugar consumption',
            'Minimize stress',
            'Decrease alcohol consumption'
          ]),
          complaints:
            'Undoubtedly, eccentricity is theoretically possible. The motion , despite external influences , attracts a distant azimuth , the speed of a comet at perihelion , paradoxical though it may seem , oscillates an interplanetary meteorite.',
          diagnosis: 'Subclinical hypothyroidism. Latent iron deficiency',
          createdAt: '2023-03-11T18:12:28.182Z',
          updatedAt: '2023-03-11T18:12:28.182Z'
        },
        {
          appointment_id: 'b3ae903f-bcab-4801-a991-245c9f7746f1',
          appointment_number: 'AP21845498',
          client_id: '74277506-dc9d-456e-b7ec-dbdc7e421295',
          doctor_id: '64ff1279-8b59-4143-8e6c-a0c8f38bf9d5',
          schedule_id: '7d56a19f-c5cb-4db2-a539-8f7d8f91a972',
          _id: '786d68f3-0ba5-4c05-8285-41785ed38c5d',
          appointment_period: '09:30 - 10:00',
          is_canceled: false,
          cancel_date: null,
          is_set_to: 'expected',
          drugs: JSON.stringify([
            {
              name: 'Amlodipine',
              dosage: '0.5 mg',
              frequency_per_day: 'once a day',
              frequency_per_week: 'daily',
              duration: 'Amlodipine',
              start_date: '2023-03-11',
              end_date: '2023-03-19',
              explanation: 'Take in the morning on an empty stomach'
            }
          ]),
          recommendations: JSON.stringify([
            'Sleep not less than 7-8h/day',
            'Control sugar consumption',
            'Minimize stress',
            'Decrease alcohol consumption'
          ]),
          complaints:
            'Undoubtedly, eccentricity is theoretically possible. The motion , despite external influences , attracts a distant azimuth , the speed of a comet at perihelion , paradoxical though it may seem , oscillates an interplanetary meteorite.',
          diagnosis: 'Subclinical hypothyroidism. Latent iron deficiency',
          createdAt: '2023-03-11T18:12:46.335Z',
          updatedAt: '2023-03-11T18:12:46.335Z'
        },
        {
          appointment_id: '5f73f39a-8dc6-457b-a671-e1cec9ada8b9',
          appointment_number: 'AP92564895',
          client_id: '74277506-dc9d-456e-b7ec-dbdc7e421295',
          doctor_id: '64ff1279-8b59-4143-8e6c-a0c8f38bf9d5',
          schedule_id: '7d56a19f-c5cb-4db2-a539-8f7d8f91a972',
          _id: 'c7f54bf3-c3b9-4bbf-9784-48747772b4fe',
          appointment_period: '09:30 - 10:00',
          is_canceled: false,
          cancel_date: null,
          is_set_to: 'expected',
          drugs: JSON.stringify([
            {
              name: 'Amlodipine',
              dosage: '0.5 mg',
              frequency_per_day: 'once a day',
              frequency_per_week: 'daily',
              duration: 'Amlodipine',
              start_date: '2023-03-11',
              end_date: '2023-03-19',
              explanation: 'Take in the morning on an empty stomach'
            }
          ]),
          recommendations: JSON.stringify([
            'Sleep not less than 7-8h/day',
            'Control sugar consumption',
            'Minimize stress',
            'Decrease alcohol consumption'
          ]),
          complaints:
            'Undoubtedly, eccentricity is theoretically possible. The motion , despite external influences , attracts a distant azimuth , the speed of a comet at perihelion , paradoxical though it may seem , oscillates an interplanetary meteorite.',
          diagnosis: 'Subclinical hypothyroidism. Latent iron deficiency',
          createdAt: '2023-03-11T18:13:07.359Z',
          updatedAt: '2023-03-11T18:13:07.359Z'
        },
        {
          appointment_id: '38580236-7252-4283-a26a-4965f6a75439',
          appointment_number: 'AP84648589',
          client_id: '74277506-dc9d-456e-b7ec-dbdc7e421295',
          doctor_id: '64ff1279-8b59-4143-8e6c-a0c8f38bf9d5',
          schedule_id: '7d56a19f-c5cb-4db2-a539-8f7d8f91a972',
          _id: '10bbeed7-9bce-4d49-a6e2-b46a65f568c2',
          appointment_period: '09:30 - 10:00',
          is_canceled: false,
          cancel_date: null,
          is_set_to: 'expected',
          drugs: JSON.stringify([
            {
              name: 'Amlodipine',
              dosage: '0.5 mg',
              frequency_per_day: 'once a day',
              frequency_per_week: 'daily',
              duration: 'Amlodipine',
              start_date: '2023-03-11',
              end_date: '2023-03-19',
              explanation: 'Take in the morning on an empty stomach'
            }
          ]),
          recommendations: JSON.stringify([
            'Sleep not less than 7-8h/day',
            'Control sugar consumption',
            'Minimize stress',
            'Decrease alcohol consumption'
          ]),
          complaints:
            'Undoubtedly, eccentricity is theoretically possible. The motion , despite external influences , attracts a distant azimuth , the speed of a comet at perihelion , paradoxical though it may seem , oscillates an interplanetary meteorite.',
          diagnosis: 'Subclinical hypothyroidism. Latent iron deficiency',
          createdAt: '2023-03-11T18:13:39.788Z',
          updatedAt: '2023-03-11T18:13:39.788Z'
        },
        {
          appointment_id: 'ddfdaea8-e07e-422a-a25a-cec1d49f5bcf',
          appointment_number: 'AP15789346',
          client_id: '74277506-dc9d-456e-b7ec-dbdc7e421295',
          doctor_id: '64ff1279-8b59-4143-8e6c-a0c8f38bf9d5',
          schedule_id: '7d56a19f-c5cb-4db2-a539-8f7d8f91a972',
          _id: '8013002e-2847-4178-a682-60f7a940ce18',
          appointment_period: '09:30 - 10:00',
          is_canceled: false,
          cancel_date: null,
          is_set_to: 'expected',
          drugs: JSON.stringify([
            {
              name: 'Amlodipine',
              dosage: '0.5 mg',
              frequency_per_day: 'once a day',
              frequency_per_week: 'daily',
              duration: 'Amlodipine',
              start_date: '2023-03-11',
              end_date: '2023-03-19',
              explanation: 'Take in the morning on an empty stomach'
            }
          ]),
          recommendations: JSON.stringify([
            'Sleep not less than 7-8h/day',
            'Control sugar consumption',
            'Minimize stress',
            'Decrease alcohol consumption'
          ]),
          complaints:
            'Undoubtedly, eccentricity is theoretically possible. The motion , despite external influences , attracts a distant azimuth , the speed of a comet at perihelion , paradoxical though it may seem , oscillates an interplanetary meteorite.',
          diagnosis: 'Subclinical hypothyroidism. Latent iron deficiency',
          createdAt: '2023-03-11T18:13:58.296Z',
          updatedAt: '2023-03-11T18:13:58.296Z'
        },
        {
          appointment_id: 'c50a7024-b0d9-483d-a3f6-6f802d38888a',
          appointment_number: 'AP81768698',
          client_id: '74277506-dc9d-456e-b7ec-dbdc7e421295',
          doctor_id: '64ff1279-8b59-4143-8e6c-a0c8f38bf9d5',
          schedule_id: '7d56a19f-c5cb-4db2-a539-8f7d8f91a972',
          _id: 'cd7405e8-6370-4657-92b5-51cdde9b4931',
          appointment_period: '09:30 - 10:00',
          is_canceled: false,
          cancel_date: null,
          is_set_to: 'expected',
          drugs: JSON.stringify([
            {
              name: 'Amlodipine',
              dosage: '0.5 mg',
              frequency_per_day: 'once a day',
              frequency_per_week: 'daily',
              duration: 'Amlodipine',
              start_date: '2023-03-11',
              end_date: '2023-03-19',
              explanation: 'Take in the morning on an empty stomach'
            }
          ]),
          recommendations: JSON.stringify([
            'Sleep not less than 7-8h/day',
            'Control sugar consumption',
            'Minimize stress',
            'Decrease alcohol consumption'
          ]),
          complaints:
            'Undoubtedly, eccentricity is theoretically possible. The motion , despite external influences , attracts a distant azimuth , the speed of a comet at perihelion , paradoxical though it may seem , oscillates an interplanetary meteorite.',
          diagnosis: 'Subclinical hypothyroidism. Latent iron deficiency',
          createdAt: '2023-03-11T18:14:17.033Z',
          updatedAt: '2023-03-11T18:14:17.033Z'
        },
        {
          appointment_id: '570bbca2-0a41-492c-9f18-9195930aba02',
          appointment_number: 'AP65762795',
          client_id: '74277506-dc9d-456e-b7ec-dbdc7e421295',
          doctor_id: '5542b45b-530e-4d7f-bdd4-2322633f591f',
          schedule_id: 'f0351635-5900-4b20-bf62-4fe57f8028fb',
          _id: 'bfc071e9-6269-4f4b-a5b6-ee70a8d944aa',
          appointment_period: '09:00 - 10:00',
          is_canceled: false,
          cancel_date: null,
          is_set_to: 'expected',
          drugs: JSON.stringify([
            {
              name: 'Amlodipine',
              dosage: '0.5 mg',
              frequency_per_day: 'once a day',
              frequency_per_week: 'daily',
              duration: 'Amlodipine',
              start_date: '2023-03-11',
              end_date: '2023-03-19',
              explanation: 'Take in the morning on an empty stomach'
            }
          ]),
          recommendations: JSON.stringify([
            'Sleep not less than 7-8h/day',
            'Control sugar consumption',
            'Minimize stress',
            'Decrease alcohol consumption'
          ]),
          complaints:
            'Undoubtedly, eccentricity is theoretically possible. The motion , despite external influences , attracts a distant azimuth , the speed of a comet at perihelion , paradoxical though it may seem , oscillates an interplanetary meteorite.',
          diagnosis: 'Subclinical hypothyroidism. Latent iron deficiency',
          createdAt: '2023-03-11T18:23:38.553Z',
          updatedAt: '2023-03-11T18:23:38.553Z'
        },
        {
          appointment_id: '1c6c3cc3-8656-4eff-8659-77d2b6542b52',
          appointment_number: 'AP72352793',
          client_id: '74277506-dc9d-456e-b7ec-dbdc7e421295',
          doctor_id: '5542b45b-530e-4d7f-bdd4-2322633f591f',
          schedule_id: 'f0351635-5900-4b20-bf62-4fe57f8028fb',
          _id: 'ee8d0123-9537-4d2d-bbd1-4389f4557cb0',
          appointment_period: '09:00 - 10:00',
          is_canceled: false,
          cancel_date: null,
          is_set_to: 'expected',
          drugs: JSON.stringify([
            {
              name: 'Amlodipine',
              dosage: '0.5 mg',
              frequency_per_day: 'once a day',
              frequency_per_week: 'daily',
              duration: 'Amlodipine',
              start_date: '2023-03-11',
              end_date: '2023-03-19',
              explanation: 'Take in the morning on an empty stomach'
            }
          ]),
          recommendations: JSON.stringify([
            'Sleep not less than 7-8h/day',
            'Control sugar consumption',
            'Minimize stress',
            'Decrease alcohol consumption'
          ]),
          complaints:
            'Undoubtedly, eccentricity is theoretically possible. The motion , despite external influences , attracts a distant azimuth , the speed of a comet at perihelion , paradoxical though it may seem , oscillates an interplanetary meteorite.',
          diagnosis: 'Subclinical hypothyroidism. Latent iron deficiency',
          createdAt: '2023-03-11T18:24:57.970Z',
          updatedAt: '2023-03-11T18:24:57.970Z'
        },
        {
          appointment_id: '4ff4227b-83a9-4e37-9180-932fd1fb7f82',
          appointment_number: 'AP89539599',
          client_id: '74277506-dc9d-456e-b7ec-dbdc7e421295',
          doctor_id: '5542b45b-530e-4d7f-bdd4-2322633f591f',
          schedule_id: 'f0351635-5900-4b20-bf62-4fe57f8028fb',
          _id: 'e595391b-46b7-4dfe-aba5-e5b284198380',
          appointment_period: '09:00 - 10:00',
          is_canceled: false,
          cancel_date: null,
          is_set_to: 'expected',
          drugs: JSON.stringify([
            {
              name: 'Amlodipine',
              dosage: '0.5 mg',
              frequency_per_day: 'once a day',
              frequency_per_week: 'daily',
              duration: 'Amlodipine',
              start_date: '2023-03-11',
              end_date: '2023-03-19',
              explanation: 'Take in the morning on an empty stomach'
            }
          ]),
          recommendations: JSON.stringify([
            'Sleep not less than 7-8h/day',
            'Control sugar consumption',
            'Minimize stress',
            'Decrease alcohol consumption'
          ]),
          complaints:
            'Undoubtedly, eccentricity is theoretically possible. The motion , despite external influences , attracts a distant azimuth , the speed of a comet at perihelion , paradoxical though it may seem , oscillates an interplanetary meteorite.',
          diagnosis: 'Subclinical hypothyroidism. Latent iron deficiency',
          createdAt: '2023-03-11T18:25:18.331Z',
          updatedAt: '2023-03-11T18:25:18.331Z'
        },
        {
          appointment_id: '52d7ea5e-787c-497a-9388-66296521a918',
          appointment_number: 'AP27259356',
          client_id: '74277506-dc9d-456e-b7ec-dbdc7e421295',
          doctor_id: '5542b45b-530e-4d7f-bdd4-2322633f591f',
          schedule_id: 'f0351635-5900-4b20-bf62-4fe57f8028fb',
          _id: '604c1fb4-a0ac-41f0-9684-2a8d3617759c',
          appointment_period: '09:00 - 10:00',
          is_canceled: false,
          cancel_date: null,
          is_set_to: 'expected',
          drugs: JSON.stringify([
            {
              name: 'Amlodipine',
              dosage: '0.5 mg',
              frequency_per_day: 'once a day',
              frequency_per_week: 'daily',
              duration: 'Amlodipine',
              start_date: '2023-03-11',
              end_date: '2023-03-19',
              explanation: 'Take in the morning on an empty stomach'
            }
          ]),
          recommendations: JSON.stringify([
            'Sleep not less than 7-8h/day',
            'Control sugar consumption',
            'Minimize stress',
            'Decrease alcohol consumption'
          ]),
          complaints:
            'Undoubtedly, eccentricity is theoretically possible. The motion , despite external influences , attracts a distant azimuth , the speed of a comet at perihelion , paradoxical though it may seem , oscillates an interplanetary meteorite.',
          diagnosis: 'Subclinical hypothyroidism. Latent iron deficiency',
          createdAt: '2023-03-11T18:25:40.247Z',
          updatedAt: '2023-03-11T18:25:40.247Z'
        },
        {
          appointment_id: 'c8bc3f12-c53f-4d7a-9a43-f2e120aa81b5',
          appointment_number: 'AP99679972',
          client_id: '74277506-dc9d-456e-b7ec-dbdc7e421295',
          doctor_id: '5542b45b-530e-4d7f-bdd4-2322633f591f',
          schedule_id: 'f0351635-5900-4b20-bf62-4fe57f8028fb',
          _id: 'cb1de6d9-4724-4ba5-b64a-99f48c6d0a52',
          appointment_period: '09:00 - 10:00',
          is_canceled: false,
          cancel_date: null,
          is_set_to: 'expected',
          drugs: JSON.stringify([
            {
              name: 'Amlodipine',
              dosage: '0.5 mg',
              frequency_per_day: 'once a day',
              frequency_per_week: 'daily',
              duration: 'Amlodipine',
              start_date: '2023-03-11',
              end_date: '2023-03-19',
              explanation: 'Take in the morning on an empty stomach'
            }
          ]),
          recommendations: JSON.stringify([
            'Sleep not less than 7-8h/day',
            'Control sugar consumption',
            'Minimize stress',
            'Decrease alcohol consumption'
          ]),
          complaints:
            'Undoubtedly, eccentricity is theoretically possible. The motion , despite external influences , attracts a distant azimuth , the speed of a comet at perihelion , paradoxical though it may seem , oscillates an interplanetary meteorite.',
          diagnosis: 'Subclinical hypothyroidism. Latent iron deficiency',
          createdAt: '2023-03-11T18:25:56.182Z',
          updatedAt: '2023-03-11T18:25:56.182Z'
        },
        {
          appointment_id: 'e41ed099-f22b-4840-a60b-bd676df04770',
          appointment_number: 'AP74966528',
          client_id: '74277506-dc9d-456e-b7ec-dbdc7e421295',
          doctor_id: '5542b45b-530e-4d7f-bdd4-2322633f591f',
          schedule_id: 'f0351635-5900-4b20-bf62-4fe57f8028fb',
          _id: '20f204c5-03a7-4e02-aa01-b8a3c4d44879',
          appointment_period: '14:00 - 15:00',
          is_canceled: false,
          cancel_date: null,
          is_set_to: 'expected',
          drugs: JSON.stringify([
            {
              name: 'Amlodipine',
              dosage: '0.5 mg',
              frequency_per_day: 'once a day',
              frequency_per_week: 'daily',
              duration: 'Amlodipine',
              start_date: '2023-03-11',
              end_date: '2023-03-19',
              explanation: 'Take in the morning on an empty stomach'
            }
          ]),
          recommendations: JSON.stringify([
            'Sleep not less than 7-8h/day',
            'Control sugar consumption',
            'Minimize stress',
            'Decrease alcohol consumption'
          ]),
          complaints:
            'Undoubtedly, eccentricity is theoretically possible. The motion , despite external influences , attracts a distant azimuth , the speed of a comet at perihelion , paradoxical though it may seem , oscillates an interplanetary meteorite.',
          diagnosis: 'Subclinical hypothyroidism. Latent iron deficiency',
          createdAt: '2023-03-11T18:27:37.365Z',
          updatedAt: '2023-03-11T18:27:37.365Z'
        },
        {
          appointment_id: '39c08e58-a636-480c-a4ec-6d9028704755',
          appointment_number: 'AP31653159',
          client_id: '74277506-dc9d-456e-b7ec-dbdc7e421295',
          doctor_id: '5542b45b-530e-4d7f-bdd4-2322633f591f',
          schedule_id: 'f0351635-5900-4b20-bf62-4fe57f8028fb',
          _id: 'affdd04e-4566-42f0-997e-98ac95a11e44',
          appointment_period: '14:00 - 15:00',
          is_canceled: false,
          cancel_date: null,
          is_set_to: 'expected',
          drugs: JSON.stringify([
            {
              name: 'Amlodipine',
              dosage: '0.5 mg',
              frequency_per_day: 'once a day',
              frequency_per_week: 'daily',
              duration: 'Amlodipine',
              start_date: '2023-03-11',
              end_date: '2023-03-19',
              explanation: 'Take in the morning on an empty stomach'
            }
          ]),
          recommendations: JSON.stringify([
            'Sleep not less than 7-8h/day',
            'Control sugar consumption',
            'Minimize stress',
            'Decrease alcohol consumption'
          ]),
          complaints:
            'Undoubtedly, eccentricity is theoretically possible. The motion , despite external influences , attracts a distant azimuth , the speed of a comet at perihelion , paradoxical though it may seem , oscillates an interplanetary meteorite.',
          diagnosis: 'Subclinical hypothyroidism. Latent iron deficiency',
          createdAt: '2023-03-11T18:27:52.483Z',
          updatedAt: '2023-03-11T18:27:52.483Z'
        },
        {
          appointment_id: '7dd7f203-3776-4d94-ad42-bced4c035c60',
          appointment_number: 'AP79954715',
          client_id: '74277506-dc9d-456e-b7ec-dbdc7e421295',
          doctor_id: '5542b45b-530e-4d7f-bdd4-2322633f591f',
          schedule_id: 'f0351635-5900-4b20-bf62-4fe57f8028fb',
          _id: 'b06457d0-795a-4106-80fa-a01b9653d56e',
          appointment_period: '14:00 - 15:00',
          is_canceled: false,
          cancel_date: null,
          is_set_to: 'expected',
          drugs: JSON.stringify([
            {
              name: 'Amlodipine',
              dosage: '0.5 mg',
              frequency_per_day: 'once a day',
              frequency_per_week: 'daily',
              duration: 'Amlodipine',
              start_date: '2023-03-11',
              end_date: '2023-03-19',
              explanation: 'Take in the morning on an empty stomach'
            }
          ]),
          recommendations: JSON.stringify([
            'Sleep not less than 7-8h/day',
            'Control sugar consumption',
            'Minimize stress',
            'Decrease alcohol consumption'
          ]),
          complaints:
            'Undoubtedly, eccentricity is theoretically possible. The motion , despite external influences , attracts a distant azimuth , the speed of a comet at perihelion , paradoxical though it may seem , oscillates an interplanetary meteorite.',
          diagnosis: 'Subclinical hypothyroidism. Latent iron deficiency',
          createdAt: '2023-03-11T18:28:07.997Z',
          updatedAt: '2023-03-11T18:28:07.997Z'
        },
        {
          appointment_id: '3a037bfc-c96c-49c6-9327-187a82573107',
          appointment_number: 'AP72756261',
          client_id: '74277506-dc9d-456e-b7ec-dbdc7e421295',
          doctor_id: '5542b45b-530e-4d7f-bdd4-2322633f591f',
          schedule_id: 'f0351635-5900-4b20-bf62-4fe57f8028fb',
          _id: 'c517fdc1-6e48-4390-99b8-bffd07f31e82',
          appointment_period: '14:00 - 15:00',
          is_canceled: false,
          cancel_date: null,
          is_set_to: 'expected',
          drugs: JSON.stringify([
            {
              name: 'Amlodipine',
              dosage: '0.5 mg',
              frequency_per_day: 'once a day',
              frequency_per_week: 'daily',
              duration: 'Amlodipine',
              start_date: '2023-03-11',
              end_date: '2023-03-19',
              explanation: 'Take in the morning on an empty stomach'
            }
          ]),
          recommendations: JSON.stringify([
            'Sleep not less than 7-8h/day',
            'Control sugar consumption',
            'Minimize stress',
            'Decrease alcohol consumption'
          ]),
          complaints:
            'Undoubtedly, eccentricity is theoretically possible. The motion , despite external influences , attracts a distant azimuth , the speed of a comet at perihelion , paradoxical though it may seem , oscillates an interplanetary meteorite.',
          diagnosis: 'Subclinical hypothyroidism. Latent iron deficiency',
          createdAt: '2023-03-11T18:28:23.518Z',
          updatedAt: '2023-03-11T18:28:23.518Z'
        },
        {
          appointment_id: 'd94d39fb-a0fc-4a61-b601-64ab64aed79f',
          appointment_number: 'AP92426251',
          client_id: '74277506-dc9d-456e-b7ec-dbdc7e421295',
          doctor_id: '5542b45b-530e-4d7f-bdd4-2322633f591f',
          schedule_id: 'f0351635-5900-4b20-bf62-4fe57f8028fb',
          _id: '7d3e9e15-84c2-47a2-a440-76d65331888c',
          appointment_period: '14:00 - 15:00',
          is_canceled: false,
          cancel_date: null,
          is_set_to: 'expected',
          drugs: JSON.stringify([
            {
              name: 'Amlodipine',
              dosage: '0.5 mg',
              frequency_per_day: 'once a day',
              frequency_per_week: 'daily',
              duration: 'Amlodipine',
              start_date: '2023-03-11',
              end_date: '2023-03-19',
              explanation: 'Take in the morning on an empty stomach'
            }
          ]),
          recommendations: JSON.stringify([
            'Sleep not less than 7-8h/day',
            'Control sugar consumption',
            'Minimize stress',
            'Decrease alcohol consumption'
          ]),
          complaints:
            'Undoubtedly, eccentricity is theoretically possible. The motion , despite external influences , attracts a distant azimuth , the speed of a comet at perihelion , paradoxical though it may seem , oscillates an interplanetary meteorite.',
          diagnosis: 'Subclinical hypothyroidism. Latent iron deficiency',
          createdAt: '2023-03-11T18:28:45.746Z',
          updatedAt: '2023-03-11T18:28:45.746Z'
        },
        {
          appointment_id: '22cde9fc-ad89-4931-b8a0-fabea564716c',
          appointment_number: 'AP33388948',
          client_id: '74277506-dc9d-456e-b7ec-dbdc7e421295',
          doctor_id: '5542b45b-530e-4d7f-bdd4-2322633f591f',
          schedule_id: '02143455-3e32-49a3-a125-b9620e400e68',
          _id: 'abf2fad9-f7b1-4b15-bfc2-139da4864a23',
          appointment_period: '14:00 - 15:00',
          is_canceled: false,
          cancel_date: null,
          is_set_to: 'expected',
          drugs: JSON.stringify([
            {
              name: 'Amlodipine',
              dosage: '0.5 mg',
              frequency_per_day: 'once a day',
              frequency_per_week: 'daily',
              duration: 'Amlodipine',
              start_date: '2023-03-11',
              end_date: '2023-03-19',
              explanation: 'Take in the morning on an empty stomach'
            }
          ]),
          recommendations: JSON.stringify([
            'Sleep not less than 7-8h/day',
            'Control sugar consumption',
            'Minimize stress',
            'Decrease alcohol consumption'
          ]),
          complaints:
            'Undoubtedly, eccentricity is theoretically possible. The motion , despite external influences , attracts a distant azimuth , the speed of a comet at perihelion , paradoxical though it may seem , oscillates an interplanetary meteorite.',
          diagnosis: 'Subclinical hypothyroidism. Latent iron deficiency',
          createdAt: '2023-03-11T18:30:57.107Z',
          updatedAt: '2023-03-11T18:30:57.107Z'
        },
        {
          appointment_id: 'fc912e4f-f555-46b4-bf98-a1d44785485e',
          appointment_number: 'AP19165617',
          client_id: '74277506-dc9d-456e-b7ec-dbdc7e421295',
          doctor_id: '5542b45b-530e-4d7f-bdd4-2322633f591f',
          schedule_id: '02143455-3e32-49a3-a125-b9620e400e68',
          _id: '6f86afbc-b7d4-49c8-bdf4-4d0679b0f99b',
          appointment_period: '14:00 - 15:00',
          is_canceled: false,
          cancel_date: null,
          is_set_to: 'expected',
          drugs: JSON.stringify([
            {
              name: 'Amlodipine',
              dosage: '0.5 mg',
              frequency_per_day: 'once a day',
              frequency_per_week: 'daily',
              duration: 'Amlodipine',
              start_date: '2023-03-11',
              end_date: '2023-03-19',
              explanation: 'Take in the morning on an empty stomach'
            }
          ]),
          recommendations: JSON.stringify([
            'Sleep not less than 7-8h/day',
            'Control sugar consumption',
            'Minimize stress',
            'Decrease alcohol consumption'
          ]),
          complaints:
            'Undoubtedly, eccentricity is theoretically possible. The motion , despite external influences , attracts a distant azimuth , the speed of a comet at perihelion , paradoxical though it may seem , oscillates an interplanetary meteorite.',
          diagnosis: 'Subclinical hypothyroidism. Latent iron deficiency',
          createdAt: '2023-03-11T18:31:33.081Z',
          updatedAt: '2023-03-11T18:31:33.081Z'
        },
        {
          appointment_id: '2a803b0c-d243-44fb-9961-b4a9f27e3229',
          appointment_number: 'AP42513453',
          client_id: '74277506-dc9d-456e-b7ec-dbdc7e421295',
          doctor_id: '5542b45b-530e-4d7f-bdd4-2322633f591f',
          schedule_id: '02143455-3e32-49a3-a125-b9620e400e68',
          _id: '397c02ad-022a-4985-adac-33ee4b303300',
          appointment_period: '14:00 - 15:00',
          is_canceled: false,
          cancel_date: null,
          is_set_to: 'expected',
          drugs: JSON.stringify([
            {
              name: 'Amlodipine',
              dosage: '0.5 mg',
              frequency_per_day: 'once a day',
              frequency_per_week: 'daily',
              duration: 'Amlodipine',
              start_date: '2023-03-11',
              end_date: '2023-03-19',
              explanation: 'Take in the morning on an empty stomach'
            }
          ]),
          recommendations: JSON.stringify([
            'Sleep not less than 7-8h/day',
            'Control sugar consumption',
            'Minimize stress',
            'Decrease alcohol consumption'
          ]),
          complaints:
            'Undoubtedly, eccentricity is theoretically possible. The motion , despite external influences , attracts a distant azimuth , the speed of a comet at perihelion , paradoxical though it may seem , oscillates an interplanetary meteorite.',
          diagnosis: 'Subclinical hypothyroidism. Latent iron deficiency',
          createdAt: '2023-03-11T18:31:46.285Z',
          updatedAt: '2023-03-11T18:31:46.285Z'
        },
        {
          appointment_id: 'd031ddd2-609f-492d-b589-fa1363efb157',
          appointment_number: 'AP65595164',
          client_id: '74277506-dc9d-456e-b7ec-dbdc7e421295',
          doctor_id: '5542b45b-530e-4d7f-bdd4-2322633f591f',
          schedule_id: '02143455-3e32-49a3-a125-b9620e400e68',
          _id: '7b0d6b37-3803-452a-828c-ab28a544b895',
          appointment_period: '14:00 - 15:00',
          is_canceled: false,
          cancel_date: null,
          is_set_to: 'expected',
          drugs: JSON.stringify([
            {
              name: 'Amlodipine',
              dosage: '0.5 mg',
              frequency_per_day: 'once a day',
              frequency_per_week: 'daily',
              duration: 'Amlodipine',
              start_date: '2023-03-11',
              end_date: '2023-03-19',
              explanation: 'Take in the morning on an empty stomach'
            }
          ]),
          recommendations: JSON.stringify([
            'Sleep not less than 7-8h/day',
            'Control sugar consumption',
            'Minimize stress',
            'Decrease alcohol consumption'
          ]),
          complaints:
            'Undoubtedly, eccentricity is theoretically possible. The motion , despite external influences , attracts a distant azimuth , the speed of a comet at perihelion , paradoxical though it may seem , oscillates an interplanetary meteorite.',
          diagnosis: 'Subclinical hypothyroidism. Latent iron deficiency',
          createdAt: '2023-03-11T18:32:05.997Z',
          updatedAt: '2023-03-11T18:32:05.997Z'
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Appointments', null, {});
  }
};
/* ids */
// f5a5761f-09b3-4890-bbcf-2c59667dd828
// c107ce86-533d-4f38-94fc-3b9095ae3a73
// 17eabc49-2327-4f05-a884-70fea256a6ae
// 62b626bb-de99-479f-9f00-09778fd1d149
// db4af080-bd91-4973-adb4-a114df71e162
// 9340b2f3-2da7-445c-bf7e-6fd102ee9601
// b36e50e9-72a4-445c-ba0f-e09f431a6999

/* doctors */
// 64ff1279-8b59-4143-8e6c-a0c8f38bf9d5 |(2)**
// 5542b45b-530e-4d7f-bdd4-2322633f591f |(1)*
// aa9a40f9-de74-41e2-9ac7-5af88f2ecf98 |(3)***
// 33f41511-880b-4b44-97ca-df6ea0a746cb |(1)*
// 9d0867d3-4fd3-482a-b423-3c1c508b6c69 |(1)*

/* depts */
// 1dd1712f-64f5-4e65-a0b3-00e014c7557b \(4)
// b416477d-7802-4a56-8686-35a0f3f04fbc
// 12c50277-e015-45d1-9bd4-f0d2103a2733
// 2ee50d93-43b9-44c3-a656-16bbc9c1f88d \(2)**
// 65477b6e-0f80-4045-a2c5-26def429614a
// edb7bc66-05e9-4dfe-8fff-7e7e956c7c22
// e99d51a6-60da-4519-8e6e-8741d8ad6aed
// 04525180-4192-4d71-9d35-90a042fc044b \(3)
// 318173b2-3628-4293-9a99-7b8cd98840ac
// 70162fd4-f0d0-4e3a-b766-1071380af52e
