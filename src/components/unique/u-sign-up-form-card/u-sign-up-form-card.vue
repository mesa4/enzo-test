<template>
    <div
        :at-u-sign-up-form-card="atAttribute"
        class="u-sign-up-form-card"
    >
        <CCard
            card-title="Sign up to hire talent"
            class="sign-up-form-card__card mt-2 mx-auto"
        >
            <template #body>
                <form @submit.prevent="signUp">
                    <div class="row">
                        <div class="col-12 mt-4 col-md-6">
                            <CInputText
                                v-model="form.firstName"
                                placeholder="First name"
                                :error-message="errorMessages.firstName"
                            />
                        </div>
                        <div class="col-12 mt-4 col-md-6">
                            <CInputText
                                v-model="form.lastName"
                                placeholder="Last name"
                                :error-message="errorMessages.lastName"
                            />
                        </div>
                        <div class="col-12 mt-4">
                            <CInputText
                                v-model="form.email"
                                type="email"
                                placeholder="Email"
                                :error-message="errorMessages.email"
                            />
                        </div>
                        <div class="col-12 mt-4">
                            <CInputText
                                v-model="form.password"
                                type="password"
                                placeholder="Password (8 or more characters)"
                                :error-message="errorMessages.password"
                            />
                        </div>
                        <div class="col-12 mt-4">
                            <CSelect
                                v-model="form.country"
                                :options-list="countryOptionsList"
                                placeholder="Password (8 or more characters)"
                                :error-message="errorMessages.password"
                            />
                        </div>
                    </div>
                    <CButton
                        :is-disabled="isSignUpFormLoading"
                        type="submit"
                        text="Create my account"
                        class="sign-up-form-card__card-submit"
                    />
                </form>
            </template>
        </CCard>
    </div>
</template>

<script lang="ts">
import {
    ref,
    reactive,
    defineComponent,
    computed, PropType
} from 'vue';

import CCard from '../../common/c-card';
import CButton from '../../common/c-button';
import CSelect from '../../common/c-select';
import CInputText from '../../common/c-input-text';

import { auth } from '../../../services/auth-service';
import { TRole } from '../../../types/role';

interface IErrorMessages {
    firstName: string
    lastName: string
    email: string
    password: string
}

interface IForm {
    firstName: string
    lastName: string
    email: string
    password: string
    country: string
}

export default defineComponent({
    name: 'USignUpFormCard',
    components: {
        CSelect,
        CCard,
        CButton,
        CInputText
    },
    props: {
        /**
         * user role
         */
        role: {
            type: String as PropType<TRole | null>,
            default: ''
        },
        /**
         * AQA attribute
         */
        atAttribute: {
            type: String,
            default: ''
        }
    },
    setup(props) {
        const isSignUpFormLoading = ref(false);

        const form: IForm = reactive({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            country: 'Canada'
        });

        const errorMessages: IErrorMessages = reactive({
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        });

        const countryOptionsList = computed(() => {
            return ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua &amp; Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia &amp; Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote D Ivoire', 'Croatia', 'Cruise Ship', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyz Republic', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania', 'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Pierre &amp; Miquelon', 'Samoa', 'San Marino', 'Satellite', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'St Kitts &amp; Nevis', 'St Lucia', 'St Vincent', 'St. Lucia', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor L\'Este', 'Togo', 'Tonga', 'Trinidad &amp; Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks &amp; Caicos', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe'];
        });

        function resetErrorMessages() {
            errorMessages.firstName = '';
            errorMessages.lastName = '';
            errorMessages.email = '';
            errorMessages.password = '';
        }

        function validateForm() {
            const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

            const fieldsNameMap = {
                firstName: 'First name',
                lastName: 'Last name',
                email: 'Email',
                password: 'Password'
            };

            Object.entries(form).forEach(([key, value]) => {
                if (!value) {
                    // @ts-ignore
                    errorMessages[key] = `${fieldsNameMap[key]} is required`;
                }
                if (key === 'email' && !emailRegex.test(value)) {
                    errorMessages.email = `${fieldsNameMap[key]} should be valid`;
                }
                if (key === 'password' && value.length < 9) {
                    errorMessages.password = 'Too short. Use at least 8 characters';
                }
            });
        }

        const isFormValid = computed(() => {
            return !Object.values(errorMessages).filter(Boolean).length;
        });

        async function signUp() {
            resetErrorMessages();
            validateForm();
            if (isFormValid.value) {
                isSignUpFormLoading.value = true;
                try {
                    const params = {
                        role: props.role,
                        firstName: form.firstName,
                        lastName: form.lastName,
                        email: form.email,
                        password: form.password,
                        country: form.country
                    };
                    await auth.signUp(params);
                } catch (error) {
                    /* eslint-disable no-console */
                    console.log('ERROR signup', error);
                } finally {
                    isSignUpFormLoading.value = false;
                }
            }
        }

        return {
            form,
            countryOptionsList,
            isFormValid,
            isSignUpFormLoading,
            errorMessages,
            signUp
        };
    }
});
</script>

<style lang="scss" src="./u-sign-up-form-card.scss"/>
